'use client';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { AnimationMixer } from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function ContactFormWithModel() {
  const [showModel, setShowModel] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [animationDone, setAnimationDone] = useState(false);
  const sceneRef = useRef();  
  const rendererRef = useRef();
  const modelRef = useRef();
  const controlsRef = useRef(null);
  const mixerRef = useRef();
  const audioRef = useRef();

  const handleSubmit = async (event) => {

    event.preventDefault();

    const templateParams = {
      from_name: name, 
      message: message, 
      email: email
    }

    emailjs.send("service_r48ktji", "template_rbveamh", templateParams, "iTiSvmGXiBnQjSP2O")
    .then((response) => {
      console.log("Email enviado", response.status, response.text)
    })
    try {
      setShowModel(true);
    } catch (error) {
      console.error('Erro', error);
      setEmailError(true);
    } 
  };


  useEffect(() => {
    if (typeof window !== 'undefined' && showModel) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(5, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      const width = window.innerWidth * 0.7;
      const height = window.innerHeight * 0.7;
      renderer.setSize(width, height);
      rendererRef.current = renderer;
      sceneRef.current.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
      directionalLight.position.set(0, 10, 10);
      directionalLight.castShadow = true;
      scene.add(directionalLight);

      const loader = new GLTFLoader();
      loader.load(
        'img/scene-34.gltf',
        (gltf) => {
          const model = gltf.scene;
          modelRef.current = model;
          scene.add(model);

          mixerRef.current = new AnimationMixer(model);

          gltf.animations.forEach((clip) => {
            mixerRef.current.clipAction(clip).play();
          });

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          const offset = new THREE.Vector3().subVectors(center, scene.position);
          model.position.sub(offset);

          const maxDim = Math.max(size.x, size.y, size.z);
          const distance = maxDim / Math.tan((Math.PI / 180) * camera.fov / 2);
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          const zoomFactor = isMobile ? 0.5 : 0.7;
          const mobileDistanceFactor = isMobile ? 1 : 0.5;
          camera.position.set(center.x - (maxDim * zoomFactor), center.y, center.z + distance * mobileDistanceFactor);
          camera.lookAt(center);

          const controls = new OrbitControls(camera, renderer.domElement);
          controlsRef.current = controls;
          controls.enableRotate = false;  
          controls.enableZoom = false;    
          controls.enablePan = false;     
          controls.minPolarAngle = Math.PI / 2;
          controls.maxPolarAngle = Math.PI / 2;

          let animationCompleted = false;
          const animate = () => {
            if (mixerRef.current) {
              mixerRef.current.update(0.016);
            }
            controls.update();
            renderer.render(scene, camera);
            if (!animationCompleted) {
              requestAnimationFrame(animate);
            }
          };
          animate();

  
          audioRef.current = new Audio('img/email.mp3');
          audioRef.current.play();

       
          setTimeout(() => {
            setAnimationDone(true);
            setShowModel(false);  
            setName('');
            setEmail('');
            setMessage('');
            audioRef.current.pause();
            audioRef.current.currentTime = 0; 
          }, 5000);
        },
        undefined,
        (error) => {
          console.error('Erro ao carregar o modelo GLTF', error);
        }
      );

      function handleResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
      }

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        if (controlsRef.current) {
          controlsRef.current.dispose();
        }
        if (rendererRef.current && sceneRef.current) {
          sceneRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
        if (audioRef.current) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        }
      };
    }
  }, [showModel]);

  return (
    <div>
      {!animationDone && !showModel && (
        <div className="max-w-md mx-auto px-9 py-4 bg-white rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-black">Contact me</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700"></label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder='Name:'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700"></label>
              <input
                type="email"
                id="email"
                placeholder='Email:'
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-gray-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700"></label>
              <textarea
                id="message"
                name="message"
                placeholder='Message:'
                rows="4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="w-full px-4 py-4 border rounded-md focus:outline-none focus:border-gray-500"
              ></textarea>
            </div>
            {/* <div className="text-red-500 text-xs text-center mb-4">
              *Backend ainda em desenvolvimento, mas clique em submit para ver a animação 3D*
            </div> */}
            <div className="flex justify-end">
              <button type="submit" className="bg-black hover:opacity-80 text-white shadow-xl px-4 py-2 inline-flex rounded-md">Submit</button>
            </div>
            {emailError && <p className="text-red-500 text-xs text-center md:mt-2">Error sending the e-mail. Try again later.</p>}
          </form>
        </div>
      )}
      {animationDone && !showModel && (
        <div className="max-w-md mx-auto px-9 py-4 bg-white rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-semibold mb-4 text-black">Email Sent</h2>
          <p className="text-gray-700">Thank you for your submission!</p>
        </div>
      )}
      {showModel && !animationDone && (
        <div ref={sceneRef} className='relative' style={{ width: '70vw', height: '70vh', overflow: 'hidden' }}>
        </div>
      )}
    </div>
  );
}

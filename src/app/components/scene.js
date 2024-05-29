import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { AnimationMixer } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export default function ModelViewer() {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const modelRef = useRef();
  const mixerRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined') {
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
        'img/scene-30.gltf',
        (gltf) => {
          const model = gltf.scene;
          modelRef.current = model;
          scene.add(model);

          // Create mixer for animations
          mixerRef.current = new AnimationMixer(model);

          // Play all animations
          gltf.animations.forEach((clip) => {
            mixerRef.current.clipAction(clip).play();
          });

          // Adjust camera position to view the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());
          const maxDim = Math.max(size.x, size.y, size.z);
          const distance = maxDim / Math.tan((Math.PI / 180) * camera.fov / 2);
          const zoomFactor = -7 ; // Reducing the zoom
          camera.position.set(center.x - (maxDim * zoomFactor), center.y, center.z + distance * 0.7); // Adjusting camera position
          camera.lookAt(center);

          renderer.render(scene, camera);

          const animate = () => {
            // Update mixer for animations
            if (mixerRef.current) {
              mixerRef.current.update(0.016); // Pass delta time
            }

            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          };
          animate();
        },
        undefined,
        (error) => {
          console.error('Error loading GLTF model', error);
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
        if (rendererRef.current && sceneRef.current) {
          sceneRef.current.removeChild(rendererRef.current.domElement);
        }
        rendererRef.current.dispose();
      };
    }
  }, []);

  return (
    <div>
      <div ref={sceneRef} className='relative' style={{ width: '70vw', height: '70vh', overflow: 'hidden' }}>
      </div>
    </div>
  );
}

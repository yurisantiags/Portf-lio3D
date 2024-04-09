import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default function ModelViewer() {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const modelRef = useRef();
  const controlsRef = useRef(null);

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
        'img/scene-25.gltf',
        (gltf) => {
          const model = gltf.scene;
          modelRef.current = model;
          scene.add(model);

          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          // Calcula o deslocamento necessário para centralizar o modelo na cena
          const offset = new THREE.Vector3().subVectors(center, scene.position);
          model.position.sub(offset); // Aplica o deslocamento para centralizar o modelo na cena

          // Ajusta a posição da câmera para visualizar o modelo
          const maxDim = Math.max(size.x, size.y, size.z);
          const distance = maxDim / Math.tan((Math.PI / 180) * camera.fov / 2);
          const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
          const zoomFactor = isMobile ? 0.5 : 0.7; // Defina o fator de zoom com base no dispositivo
          const mobileDistanceFactor = isMobile ? 1.5 : 0.5; // Fator de distância para dispositivos móveis
          camera.position.set(center.x - (maxDim * zoomFactor), center.y, center.z + distance * mobileDistanceFactor);
          camera.lookAt(center);

          const controls = new OrbitControls(camera, renderer.domElement);
          controlsRef.current = controls;
          controls.enableRotate = true; // Permitir apenas rotação
          controls.enableZoom = false; // Desabilitar zoom
          controls.enablePan = false;
          controls.minPolarAngle = Math.PI / 2;
          controls.maxPolarAngle = Math.PI / 2;

          renderer.render(scene, camera);

          const animate = () => {
            // Girar o modelo em torno do eixo Y
            model.rotation.y += 0.02; // Reduzindo a velocidade de rotação

            controlsRef.current.update();
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          };
          animate();
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

'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export default function ModelViewer() {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const modelRef = useRef();
  const controlsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.set(0, 0, 2); // Adjusted camera position
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
        'img/scene-22.gltf', //change image 
        (gltf) => {
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.material.flatShading = false;
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          gltf.scene.scale.set(1.0, 1.0, 1.0);
          // Adjust object position
          gltf.scene.position.y = 0.01; // Move the object 0.5 units upwards
          modelRef.current = gltf.scene;
          scene.add(gltf.scene);

          const controls = new OrbitControls(camera, renderer.domElement);
          controlsRef.current = controls;

          // Set restrictions to only left/right rotation
          controls.enableRotate = true;
          controls.enablePan = false;
          controls.minPolarAngle = Math.PI / 2; // Set minimum polar angle to limit downward rotation
          controls.maxPolarAngle = Math.PI / 2; // Set maximum polar angle to limit upward rotation

          renderer.render(scene, camera);

          // Animate function
          const animate = () => {
            controlsRef.current.update(); // Update controls
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
          };
          animate(); // Start animation loop
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

      renderer.domElement.style.cursor = 'grab'; // Change cursor style

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

  return <div ref={sceneRef} />;
}
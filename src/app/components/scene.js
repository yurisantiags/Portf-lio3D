'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export default function ModelViewer() {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const modelRef = useRef();
  const scaleDirectionRef = useRef(1);
  const controlsRef = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 2.5;
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
        'img/scene-16.gltf',
        (gltf) => {
          gltf.scene.traverse((child) => {
            if (child.isMesh) {
              child.material.flatShading = false;
              child.castShadow = true;
              child.receiveShadow = true;
            }
          });

          gltf.scene.scale.set(1.0, 1.0, 1.0);
          modelRef.current = gltf.scene;
          scene.add(gltf.scene);

          const controls = new OrbitControls(camera, renderer.domElement);
          controlsRef.current = controls;
          controls.enableDamping = true;
          controls.dampingFactor = 0.25;

          function animateModel() {
            const scaleSpeed = 0.005;
            modelRef.current.scale.x += scaleSpeed * scaleDirectionRef.current;
            modelRef.current.scale.y += scaleSpeed * scaleDirectionRef.current;
            modelRef.current.scale.z += scaleSpeed * scaleDirectionRef.current;

            if (modelRef.current.scale.x <= 0.5 || modelRef.current.scale.x >= 1.5) {
              scaleDirectionRef.current *= -1;
            }

            const rotationSpeed = 0.01;
            modelRef.current.rotation.y += rotationSpeed;

            renderer.render(scene, camera);
            requestAnimationFrame(animateModel);
          }

          animateModel();
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

      renderer.domElement.style.cursor = 'pointer';

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
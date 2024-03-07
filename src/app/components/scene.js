'use client';
import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


export default function ModelViewer() {
  const sceneRef = useRef();
  const rendererRef = useRef();
  const modelRef = useRef();
  const scaleDirectionRef = useRef(1); // Referência para controlar a direção da escala
  const controlsRef = useRef(null); // Inicializamos com null para evitar erros de undefined

  useEffect(() => {
    // Criação da cena
    const scene = new THREE.Scene();

    // Configuração da câmera
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2.5;

    // Configuração do renderer com dimensões personalizadas
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    const width = window.innerWidth * 0.7; // Definindo a largura do renderizador como 70% da largura da janela
    const height = window.innerHeight * 0.7; // Definindo a altura do renderizador como 70% da altura da janela
    renderer.setSize(width, height);
    rendererRef.current = renderer;
    sceneRef.current.appendChild(renderer.domElement);

    // Configuração da luz ambiente
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Configuração da luz direcional para sombras
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 10, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Carregamento do modelo GLTF
    const loader = new GLTFLoader();
    loader.load(
      'img/scene-16.gltf',
      (gltf) => {
        // Configuração do sombreamento suave para o material do modelo
        gltf.scene.traverse((child) => {
          if (child.isMesh) {
            child.material.flatShading = false;
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });

        // Ajuste de escala inicial do modelo
        gltf.scene.scale.set(1.0, 1.0, 1.0);

        modelRef.current = gltf.scene;
        scene.add(gltf.scene);

        // Adiciona controles de órbita
        const controls = new OrbitControls(camera, renderer.domElement);
        controlsRef.current = controls;
        controls.enableDamping = true; // Adiciona amortecimento para suavizar os movimentos
        controls.dampingFactor = 0.25; // Ajusta o fator de amortecimento para controlar a suavidade dos movimentos

        // Função de animação de escala com rotação
        function animateModel() {
          // Ajuste da velocidade de escala
          const scaleSpeed = 0.005; // Ajuste esse valor para alterar a velocidade de escala
          modelRef.current.scale.x += scaleSpeed * scaleDirectionRef.current;
          modelRef.current.scale.y += scaleSpeed * scaleDirectionRef.current;
          modelRef.current.scale.z += scaleSpeed * scaleDirectionRef.current;

          // Inverte a direção da escala quando atinge os limites
          if (modelRef.current.scale.x <= 0.5 || modelRef.current.scale.x >= 1.5) {
            scaleDirectionRef.current *= -1;
          }

          // Ajuste da velocidade de rotação
          const rotationSpeed = 0.01; // Ajuste esse valor para alterar a velocidade de rotação
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

    // Função para atualizar o tamanho do renderer quando a janela é redimensionada
    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth * 0.7, window.innerHeight * 0.7);
    }

    window.addEventListener('resize', handleResize);

    // Definindo o cursor para indicar que o usuário pode interagir
    renderer.domElement.style.cursor = 'pointer';

    // Limpeza dos objetos criados quando o componente é desmontado
    return () => {
      window.removeEventListener('resize', handleResize);
      if (controlsRef.current) {
        controlsRef.current.dispose(); // Dispose dos controles de órbita
      }
      rendererRef.current.dispose();
      sceneRef.current.removeChild(rendererRef.current.domElement);
    };
  }, []);

  return <div ref={sceneRef} />;
}


import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { createMachines } from "../data/createMachines";

export default function ProcessFlow3D({ onMachineClick }) {
  const mountRef = useRef(null);
  const machineRefs = useRef({});

  useEffect(() => {
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 100);
    camera.position.set(6, 6, 12);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // 💫 Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    // 💡 기본 조명과 격자
    scene.add(new THREE.AmbientLight(0xffffff, 1));
    scene.add(new THREE.GridHelper(30, 30));

    // 🏭 설비 생성
    machineRefs.current = createMachines(scene);

    // 🎯 클릭 처리
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    const handleClick = (e) => {
      const bounds = mountRef.current.getBoundingClientRect();
      pointer.x = ((e.clientX - bounds.left) / bounds.width) * 2 - 1;
      pointer.y = -((e.clientY - bounds.top) / bounds.height) * 2 + 1;

      raycaster.setFromCamera(pointer, camera);
      const intersects = raycaster.intersectObjects(Object.values(machineRefs.current));
      if (intersects.length > 0) {
        const id = intersects[0].object.name;
        onMachineClick?.(id);
      }
      
    };

    mountRef.current.addEventListener("click", handleClick);

    // 📐 Resize 반응형
    const handleResize = () => {
      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // 🔁 애니메이션
    const animate = () => {
      requestAnimationFrame(animate);

      const now = Date.now();
      if (machineRefs.current.jigger)
        machineRefs.current.jigger.rotation.y += 0.02;
      if (machineRefs.current.tenter)
        machineRefs.current.tenter.position.y = 0.2 + Math.sin(now * 0.005) * 0.1;
      if (machineRefs.current.rapid)
        machineRefs.current.rapid.rotation.x += 0.01;

      controls.update(); // OrbitControls 반영
      renderer.render(scene, camera);
    };
    animate();

    // 🧹 Clean-up
    return () => {
      if (mountRef.current) {
        mountRef.current.removeEventListener("click", handleClick);
        window.removeEventListener("resize", handleResize);
        if (mountRef.current.contains(renderer.domElement)) {
          mountRef.current.removeChild(renderer.domElement);
        }
      }
    };

    
  }, []);

  return <div className="w-full h-[600px] bg-[#0f172a]" ref={mountRef}></div>;
}

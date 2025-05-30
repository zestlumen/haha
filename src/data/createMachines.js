import * as THREE from 'three';

export function createMachines(scene) {
  const machineRefs = {};

  // 🌪️ 지거기 (Jigger) — 회전 롤 + 축 + 베이스
  const jiggerGroup = new THREE.Group();

  const roller = new THREE.Mesh(
    new THREE.CylinderGeometry(0.5, 0.5, 2.2, 32),
    new THREE.MeshStandardMaterial({ color: 0xf87171 }) // 빨강
  );
  roller.rotation.z = Math.PI / 2;
  roller.name = '지거기';
  jiggerGroup.add(roller);

  const jiggerBase = new THREE.Mesh(
    new THREE.BoxGeometry(2.5, 0.2, 1),
    new THREE.MeshStandardMaterial({ color: 0x777777 })
  );
  jiggerBase.position.y = -0.6;
  jiggerGroup.add(jiggerBase);

  jiggerGroup.position.set(-4, 1, 0);
  scene.add(jiggerGroup);
  machineRefs.jigger = roller;

  // 🔥 텐타기 (Tenter) — 길쭉한 통로형 구조
  const tenterGroup = new THREE.Group();

  const body = new THREE.Mesh(
    new THREE.BoxGeometry(3, 1, 1),
    new THREE.MeshStandardMaterial({ color: 0x60a5fa }) // 파랑
  );
  body.name = '텐타기';
  tenterGroup.add(body);

  const duct = new THREE.Mesh(
    new THREE.CylinderGeometry(0.2, 0.2, 1.2, 16),
    new THREE.MeshStandardMaterial({ color: 0xcccccc })
  );
  duct.rotation.z = Math.PI / 2;
  duct.position.y = 0.6;
  tenterGroup.add(duct);

  tenterGroup.position.set(0, 0.5, 0);
  scene.add(tenterGroup);
  machineRefs.tenter = body;

  // 💨 래피드기 (Rapid) — 덩어리형 + 배기구
  const rapidGroup = new THREE.Group();

  const chamber = new THREE.Mesh(
    new THREE.BoxGeometry(1.5, 1.2, 1.5),
    new THREE.MeshStandardMaterial({ color: 0x4ade80 }) // 초록
  );
  chamber.name = '래피드기';
  rapidGroup.add(chamber);

  const fan = new THREE.Mesh(
    new THREE.TorusGeometry(0.3, 0.1, 16, 100),
    new THREE.MeshStandardMaterial({ color: 0x999999 })
  );
  fan.rotation.x = Math.PI / 2;
  fan.position.set(0, 0.6, 0.8);
  rapidGroup.add(fan);

  rapidGroup.position.set(4, 0.7, 0);
  scene.add(rapidGroup);
  machineRefs.rapid = chamber;

  return machineRefs;
}

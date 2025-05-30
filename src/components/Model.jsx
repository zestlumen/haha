// Model.jsx
import { useGLTF } from '@react-three/drei';

export default function Model() {
  const { scene } = useGLTF('/models/model.glb'); // ✅ 꼭 /public/models 안에 위치
  return <primitive object={scene} />;
}

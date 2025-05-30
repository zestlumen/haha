import React, { useEffect, useState } from "react";
import CakeGallery from "../components/CakeGallery";

export default function Jeukheung() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (

     <div className="cursor-none relative min-h-screen bg-gradient-to-b from-white to-pink-50 text-gray-800 px-6 py-12 overflow-hidden">
      {/* 케이크 따라다니는 이미지 */}
    <img
    src="/cakes/cursor.png"
    alt="cake-cursor"
    className="pointer-events-none fixed z-50 transition-transform duration-75 hidden md:block w-8 h-8 md:w-10 md:h-10"
    style={{
        top: position.y,
        left: position.x,
        transform: "translate(-50%, -50%)",
        position: "fixed",
    }}
    />

        <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 text-gray-800 px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
        <h1
            className="text-7xl font-extrabold mb-4 tracking-tight text-[#D9895C] font-dancing"
            >
            Jeukheung
            </h1>

            <p className="text-lg text-gray-600 mb-8">
            당신의 특별한 순간을 위한 단 하나뿐인 커스텀 케이크 🎂  
            <br />즉흥적인 감성, 즉각적인 감동.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white shadow-xl rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-2">🎨 디자인 맞춤</h2>
                <p className="text-gray-600">
                컬러, 메시지, 모양까지 원하는 대로! 당신만의 감성을 담아 케이크를 제작해요.
                </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-2">📍 당일 픽업 가능</h2>
                <p className="text-gray-600">
                빠르게 준비되는 프리미엄 케이크. 원하는 시간에 맞춰 즉시 픽업 가능!
                </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-2">🖼 갤러리</h2>
                <p className="text-gray-600">
                실제 고객들의 감동 후기를 담은 케이크 사진들로 아이디어를 얻어보세요.
                </p>
            </div>

            <div className="bg-white shadow-xl rounded-2xl p-6">
                <h2 className="text-xl font-semibold mb-2">📞 바로 문의</h2>
                <p className="text-gray-600">
                전화 또는 인스타그램 DM으로 간편하게 예약 및 상담 가능해요.
                </p>
            </div>
            </div>

        <CakeGallery />
            
            <div className="mt-12">
                <a
                    href="https://smartstore.naver.com/jeukheung_"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <button
                        className="px-6 py-3 text-white font-bold rounded-full shadow-lg transition duration-300 hover:brightness-90"
                        style={{ backgroundColor: "#D9895C" }}
                        >
                        구매하러 가기
                    </button>

                </a>
            </div>
        </div>
        </div>
    </div>

  );
}

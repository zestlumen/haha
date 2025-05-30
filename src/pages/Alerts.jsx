import React from "react";


export default function Jeukheung() {

  return (
    <div className="min-h-screen bg-[#fef8f8] text-gray-800 px-6 py-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* 브랜드명 */}
        <h1 className="text-6xl font-light tracking-tight mb-6 font-serif text-[#e87b94]">
          즉흥적인
        </h1>
        <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed">
          "즉흥적인 감성으로, 당신의 순간을 디자인하다."
        </p>

        {/* 섹션들 */}
        <div className="mt-20 grid md:grid-cols-2 gap-12 text-left">
          <Feature
            title="디자인 맞춤"
            emoji="🎨"
            desc="컬러, 메시지, 케이크 타입까지 100% 맞춤. 당신만의 감성을 담아요."
          />
          <Feature
            title="빠른 제작"
            emoji="⚡"
            desc="예약만 하면 당일 픽업도 가능! 기념일을 놓치지 않도록."
          />
          <Feature
            title="실제 후기"
            emoji="📷"
            desc="고객들이 직접 남긴 사진 갤러리로 즉흥적인 감성 확인!"
          />
          <Feature
            title="간편 문의"
            emoji="📞"
            desc="전화, DM으로 실시간 예약 및 상담 OK. 부담 없이 연락주세요."
          />
        </div>

        {/* 예약 버튼 */}
        <div className="mt-20">
          <button className="px-8 py-4 bg-[#e87b94] hover:bg-[#d8687f] text-white font-medium rounded-full shadow-md transition duration-300">
            예약하러 가기
          </button>
        </div>
      </div>
    </div>
  );
}

function Feature({ title, emoji, desc }) {
  return (
    
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition duration-200">
      <div className="text-3xl mb-2">{emoji}</div>
      <h2 className="text-xl font-semibold mb-1 text-[#333]">{title}</h2>
      <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
    </div>
  );
}

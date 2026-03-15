import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import FadeIn from './FadeIn';

export default function Timeline() {
  const containerRef = useRef(null);
  
  // 追蹤 containerRef 區塊進入視窗時的滾動進度
  // offset: "start center" 代表區塊頂部碰到畫面正中央時開始 (進度 0)
  // "end center" 代表區塊底部碰到畫面正中央時結束 (進度 1)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // 模擬資料，未來可串接 CMS
  const events = [
    { year: 'Present', title: '全端開發與 AI 整合', desc: '開發 GSAT Pro 學習應用程式，並透過 n8n 結合 Gemini API 打造專屬 AI 學習助理。' },
    { year: 'Ongoing', title: '模擬飛行與航空培訓', desc: '投入 Microsoft Flight Simulator 2024 訓練，研讀 ICAO 航空術語，朝飛行員目標邁進。' },
    { year: 'Continuous', title: '數理基礎與硬體實作', desc: '深究空間向量與物理學。同時具備水電工程技術與電腦硬體修復經驗，掌握從軟體到實體的系統架構。' }
  ];

  return (
    <section id="timeline" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-16 tracking-tight selection:bg-gray-300 dark:selection:bg-gray-700 transition-colors duration-300">跨領域歷程.</h2>
      </FadeIn>
      
      {/* 將這個父元素設為基準 (relative) 並綁定 ref */}
      <div ref={containerRef} className="relative space-y-12 pl-4 border-l border-gray-200 dark:border-gray-800 transition-colors duration-300">
        
        {/* 會跟隨滾動往下生長的動態時間軸進度條 */}
        <motion.div 
          className="absolute top-0 bottom-0 -left-[1px] w-[2px] bg-gray-900 dark:bg-gray-100 origin-top"
          style={{ scaleY: scrollYProgress }}
        />
        
        {events.map((event, idx) => (
          <FadeIn key={idx} delay={idx * 0.15}>
            <div className="relative pl-8">
            {/* 時間軸上的小圓點 */}
            <div className="absolute w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full -left-[6.5px] top-2 ring-4 ring-gray-50 dark:ring-black transition-colors duration-300"></div>
            
            <span className="text-sm font-mono text-gray-500 dark:text-gray-400 transition-colors duration-300">{event.year}</span>
            <h3 className="text-2xl font-medium text-gray-800 dark:text-gray-200 mt-1 tracking-tight transition-colors duration-300">{event.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-3 leading-relaxed text-lg font-light transition-colors duration-300">{event.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
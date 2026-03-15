import React, { useState, useEffect } from 'react';
import FadeIn from './FadeIn';
import DownloadButton from './DownloadButton';

export default function Hero() {
  // 打字機效果狀態管理
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // 將角色陣列改為物件，包含對應的專屬顏色
  const roles = [
    { text: '跨領域創造者', color: 'text-emerald-500 dark:text-emerald-400' },
    { text: '全端開發者', color: 'text-blue-500 dark:text-blue-400' },
    { text: '未來的飛行員', color: 'text-orange-500 dark:text-orange-400' }
  ];
  const typingSpeed = 150; // 打字速度

  // 游標光暈狀態
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleType();
    }, isDeleting ? typingSpeed / 2 : typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting]);

  const handleType = () => {
    const i = loopNum % roles.length;
    const fullText = roles[i].text;

    if (isDeleting) {
      setText(fullText.substring(0, text.length - 1));
    } else {
      setText(fullText.substring(0, text.length + 1));
    }

    if (!isDeleting && text === fullText) {
      setTimeout(() => setIsDeleting(true), 2000); // 打完字後停留 2 秒
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  // 取得當前角色對應的顏色
  const currentColor = roles[loopNum % roles.length].color;

  return (
    // 使用螢幕高度 (min-h-screen)，讓內容完美置中
    // 加入 relative, overflow-hidden 與 onMouseMove 監聽
    <section 
      id="hero" 
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-28 pb-16 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* 滑鼠跟隨漸層光暈 (Spotlight) */}
      <div 
        className="pointer-events-none absolute inset-0 transition-opacity duration-300 opacity-50 dark:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(148, 163, 184, 0.15), transparent 80%)`
        }}
      />

      <FadeIn delay={0.1}>
      {/* 加入 relative 與 z-10 確保文字與按鈕在光暈之上 */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
        
        {/* 主標題：極大字體、縮緊字距、高對比白 */}
        <h1 className="text-6xl md:text-8xl font-semibold tracking-tighter text-gray-900 dark:text-gray-100 leading-tight transition-colors duration-300">
          Code. Physics. <br className="hidden md:block mt-2" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-800 dark:from-gray-400 dark:to-gray-600">
            Aviation.
          </span>
        </h1>

        {/* 動態打字機副標題 */}
        <h2 className="text-2xl md:text-4xl font-medium text-gray-800 dark:text-gray-200 transition-colors duration-300 h-10">
          我是一名 <span className={`transition-colors duration-300 ${currentColor}`}>{text}</span>
          <span className="animate-pulse text-gray-400 dark:text-gray-500 font-light">|</span>
        </h2>
        
        {/* 個人介紹：加深論述，展現跨領域整合能力 */}
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light tracking-wide leading-relaxed max-w-3xl mx-auto transition-colors duration-300">
          致力於將抽象的數理邏輯轉化為解決現實問題的系統。從開發整合 AI 的 GSAT Pro 學習平台，到深究物理公式與模擬飛行。我習慣拆解複雜問題，以最純粹的技術構築極致體驗，並將這份專注與系統性思維，堅定地帶向未來的駕駛艙。
        </p>

        {/* 專案與經驗統計 (Stats 展示區) */}
        <div className="flex justify-center gap-10 md:gap-24 py-8 mt-6 border-y border-gray-200 dark:border-white/10 mx-auto transition-colors duration-300">
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">2</span>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors duration-300">實務專案</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">5<span className="text-3xl text-blue-500">+</span></span>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors duration-300">技術筆記</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300">15<span className="text-2xl md:text-3xl text-gray-400 font-light">yr</span></span>
            <span className="text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest transition-colors duration-300">硬體修復</span>
          </div>
        </div>
        
        {/* 行動呼籲 (CTA) 按鈕：圓角、極簡黑白、懸停放大與顏色變化 */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a href="#projects" className="bg-black text-white dark:bg-white dark:text-black px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-800 dark:hover:bg-gray-200 hover:scale-105 transition-all duration-300 flex items-center justify-center">
            探索專案成果
          </a>
          <a href="#notes" className="text-black dark:text-white border border-gray-300 dark:border-gray-600 px-10 py-4 rounded-full font-medium text-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 flex items-center justify-center">
            查看飛行日誌
          </a>
        </div>
        
        {/* 備審資料下載按鈕 */}
        <div className="pt-6 flex justify-center">
          <DownloadButton href="/備審資料.pdf" label="下載備審資料 (PDF)" />
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
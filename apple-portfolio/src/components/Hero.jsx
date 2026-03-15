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
        
        {/* 社群連結 (GitHub & LinkedIn) */}
        <div className="pt-8 flex justify-center gap-8">
          <a href="https://github.com/pyps0990-alt" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
          </a>
          <a href="https://linkedin.com/in/yijia-chen" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300">
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
          </a>
        </div>
      </div>
      </FadeIn>
    </section>
  );
}
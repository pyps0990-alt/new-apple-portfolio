import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Notes from './components/Notes';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';

function App() {
  // 頁面載入狀態
  const [isLoading, setIsLoading] = useState(true);

  // 從 localStorage 讀取使用者的偏好設定，若無則預設檢查系統設定
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) return savedTheme === 'dark';
    // 支援讀取系統預設的深淺色設定
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  // 當 isDarkMode 改變時，將設定存回 localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // 模擬資料載入過程與進場時機
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 載入畫面顯示 2 秒
    return () => clearTimeout(timer);
  }, []);

  return (
    // 根據狀態動態加入 'dark' class
    // 基底改為淺灰白 (bg-gray-50)，利用 dark:bg-black 支援深色，加入 transition-colors 讓切換如絲般滑順
    <div className={`${isDarkMode ? 'dark' : ''} bg-gray-50 dark:bg-black min-h-screen text-gray-900 dark:text-white font-sans selection:bg-gray-300 dark:selection:bg-gray-700 scroll-smooth antialiased transition-colors duration-500 ${isLoading ? 'overflow-hidden h-screen' : ''}`}>
      
      {/* 全螢幕載入中畫面 */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <CustomCursor />
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      
      {/* 使用 main 標籤包裹主要內容 */}
      <main>
        <Hero />
        <Timeline />
        <Projects />
        <Notes />
      </main>
      
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
import React, { useState } from 'react';

export default function Navbar({ isDarkMode, toggleDarkMode }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // 針對淺色/深色設定不同的半透明背景與邊框顏色
    <nav className="fixed w-full top-0 z-50 bg-white/60 dark:bg-black/60 backdrop-blur-xl border-b border-gray-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        
        {/* Logo/名稱：大寫、增加字距，營造精品感 */}
        <span className="text-black dark:text-white font-semibold tracking-wider text-lg selection:bg-gray-300 dark:selection:bg-gray-700 transition-colors duration-300">PORTFOLIO.</span>
        
        {/* 導覽連結與切換按鈕 */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-gray-500 dark:text-gray-400 font-medium">
          {[
            { name: '歷程', href: '#timeline' },
            { name: '專案', href: '#projects' },
            { name: '筆記', href: '#notes' },
            { name: '聯絡', href: '#contact' }
          ].map((item) => (
            <a key={item.name} href={item.href} className="hover:text-black dark:hover:text-white transition-colors duration-300 ease-in-out">
              {item.name}
            </a>
          ))}
          
          {/* 深淺色切換按鈕 */}
          <button 
            onClick={toggleDarkMode} 
            className="p-2 ml-4 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
        </div>

        {/* 手機版：切換按鈕與漢堡選單 */}
        <div className="md:hidden flex items-center gap-4">
          <button 
            onClick={toggleDarkMode} 
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors duration-300 cursor-pointer text-gray-500 dark:text-gray-400"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>
            )}
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 dark:text-white p-2 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* 手機版：下拉選單 (利用 max-h 實現滑順展開動畫) */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? 'max-h-64 border-b border-gray-200 dark:border-white/10' : 'max-h-0'}`}>
        <div className="px-6 py-4 flex flex-col space-y-6 bg-white/60 dark:bg-black/60 backdrop-blur-xl">
          {[
            { name: '歷程', href: '#timeline' },
            { name: '專案', href: '#projects' },
            { name: '筆記', href: '#notes' },
            { name: '聯絡', href: '#contact' }
          ].map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className="text-base font-medium text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors duration-300">
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-gray-200 dark:border-white/10 mt-24 selection:bg-gray-300 dark:selection:bg-gray-700 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white tracking-tight transition-colors duration-300">開啟對話.</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 font-light max-w-xl mx-auto transition-colors duration-300">無論是技術交流、專案合作，或是聊聊飛行與硬體，隨時歡迎聯絡我。</p>
        
        {/* 聯絡信箱：底部加一條線，懸停時變藍色 */}
        <div className="pt-6">
          <a href="mailto:pyps0990@gmail.com" className="text-2xl font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300 border-b-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 pb-2">
            pyps0990@gmail.com
          </a>
        </div>
        
        <p className="text-xs text-gray-500 dark:text-gray-600 pt-16 font-mono tracking-widest uppercase transition-colors duration-300">© 2026 Built with React & Tailwind CSS.</p>
      </div>
    </footer>
  );
}
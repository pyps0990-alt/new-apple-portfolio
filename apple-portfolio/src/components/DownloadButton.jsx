import React from 'react';

export default function DownloadButton({ href = "/resume.pdf", label = "下載備審資料 (PDF)" }) {
  return (
    <a 
      href={href}
      download
      // 外層設定：圓角、無背景色、極細邊框，加上平滑放大與發光陰影效果
      className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-transparent border border-gray-300 dark:border-white/20 rounded-full text-gray-900 dark:text-white font-medium text-lg overflow-hidden transition-all duration-300 ease-in-out hover:scale-105 hover:border-gray-400 dark:hover:border-white/50 hover:shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] cursor-pointer"
    >
      {/* 內層背景漸層微光：懸停時透出一絲微弱的光澤 */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-100 dark:via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></div>
      
      <span className="relative z-10 tracking-wide">{label}</span>
      
      {/* 下載圖示：利用 group-hover 讓懸停時箭頭產生微小的下移動畫，暗示「下載」動作 */}
      <svg 
        className="w-5 h-5 relative z-10 transform group-hover:translate-y-1 transition-transform duration-300 ease-in-out" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </a>
  );
}
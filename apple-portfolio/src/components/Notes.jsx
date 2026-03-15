import React, { useState } from 'react';
import FadeIn from './FadeIn';

export default function Notes() {
  const [isExpanded, setIsExpanded] = useState(false);

  const notes = [
    { date: 'Mar 2026', category: 'Physics', title: '空間向量與平面向量的核心概念解析', excerpt: '探討向量內積、外積在物理學上的意義，以及如何將其應用於力學與電磁學的基礎計算中。' },
    { date: 'Feb 2026', category: 'Aviation', title: 'MSFS 2024：從冷艙啟動到 ICAO 通訊', excerpt: '詳細記錄 A320neo 的冷艙啟動程序，包含 APU、引擎點火，以及與 ATC 進行標準 ICAO 術語通訊的實戰筆記。' },
    { date: 'Jan 2026', category: 'Hardware', title: '15 年老舊主機修復日誌：從電容到電源', excerpt: '主機板電容爆漿與 Power 供電不穩的排錯過程，展現如何透過控制變因找出硬體故障點。' },
    { date: 'Dec 2025', category: 'Dev', title: 'React 與 Tailwind CSS 的原子化設計哲學', excerpt: '在開發 GSAT Pro 過程中，如何利用原子化 CSS 提高樣式重用率，並保持程式碼的整潔與模組化。' },
    { date: 'Nov 2025', category: 'Physics', title: 'Rydberg 公式的推導與應用', excerpt: '從波耳模型出發，推導氫原子光譜的 Rydberg 公式，並探討其在量子力學發展史上的重要性。' }
  ];

  // 如果已展開就顯示全部，否則只顯示前 3 項
  const displayedNotes = isExpanded ? notes : notes.slice(0, 3);

  return (
    <section id="notes" className="py-24 px-6 max-w-4xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-16 tracking-tight transition-colors duration-300">學習筆記.</h2>
      </FadeIn>
      {/* 利用 columns-1 和 sm:columns-2 實現雙欄瀑布流 */}
      <div className="columns-1 sm:columns-2 gap-6">
        {displayedNotes.map((note, idx) => (
          <div key={idx} className="break-inside-avoid mb-6">
            <FadeIn delay={idx * 0.1}>
              <div className="bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/5 rounded-2xl p-6 hover:shadow-lg dark:hover:bg-zinc-900 hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col h-full">
                <div className="flex justify-between items-start mb-4">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-black rounded-full text-xs font-mono text-gray-600 dark:text-gray-400 tracking-wider uppercase transition-colors duration-300">{note.category}</span>
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300 mb-3 leading-snug">{note.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 flex-1 transition-colors duration-300">{note.excerpt}</p>
                <div className="pt-4 border-t border-gray-100 dark:border-gray-800 text-xs text-gray-500 dark:text-gray-500 font-mono transition-colors duration-300">
                  {note.date}
                </div>
              </div>
            </FadeIn>
            </div>
        ))}
      </div>
      
      {/* 展開 / 收起按鈕 */}
      {notes.length > 3 && (
        <FadeIn delay={0.2}>
          <div className="mt-12 flex justify-center">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-300 font-medium text-sm cursor-pointer"
            >
              {isExpanded ? '收起筆記' : '展開查看更多'}
            </button>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
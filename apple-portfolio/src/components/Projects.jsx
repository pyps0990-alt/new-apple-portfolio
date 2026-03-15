import React from 'react';
import FadeIn from './FadeIn';

export default function Projects() {
  const projects = [
    { 
      title: 'GSAT Pro', 
      desc: '專為備考學生打造的 Web App，整合課表、聯絡簿與雲端筆記功能。', 
      tech: ['React', 'Web App', 'UI/UX'],
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800',
      progress: 100,
      status: '已上線'
    },
    { 
      title: 'AI 學習助理', 
      desc: '透過 n8n 自動化工作流串接 Gemini API，實現重點摘要與個人化學習輔助。', 
      tech: ['n8n', 'Gemini API', 'Automation'],
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      progress: 85,
      status: '開發中'
    }
  ];

  // 根據技術標籤名稱，回傳對應的顏色樣式
  const getTechStyle = (tech) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800/50';
      case 'automation':
      case 'n8n':
        return 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/50';
      case 'ui/ux':
        return 'bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 border-pink-200 dark:border-pink-800/50';
      case 'web app':
        return 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50';
      default:
        return 'bg-gray-100 dark:bg-black text-gray-600 dark:text-gray-400 border-gray-200 dark:border-gray-800';
    }
  };

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeIn>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-16 tracking-tight selection:bg-gray-300 dark:selection:bg-gray-700 transition-colors duration-300">專案成果.</h2>
      </FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((item, idx) => (
          <FadeIn key={idx} delay={idx * 0.2}>
            <div className="bg-white dark:bg-zinc-900/50 border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors duration-300 group cursor-pointer selection:bg-gray-300 dark:selection:bg-gray-700 h-full flex flex-col">
            
            {/* 專案直接展示：圖片預覽區塊 */}
            <div className="relative h-48 sm:h-60 w-full overflow-hidden bg-gray-200 dark:bg-zinc-800">
              <img src={item.image} alt={item.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full font-mono tracking-wider border border-white/10">
                {item.status}
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              {/* 淺色字體為深灰，深色為純白；懸停時變藍色 */}
              <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4 tracking-tighter group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">{item.title}</h3>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light transition-colors duration-300 flex-1">{item.desc}</p>
              
              {/* 專案進度條 */}
              <div className="mb-8">
                <div className="flex justify-between text-xs font-mono text-gray-500 dark:text-gray-400 mb-2">
                  <span>Development Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-500 dark:bg-blue-400 h-1.5 rounded-full transition-all duration-1000 ease-out" style={{ width: `${item.progress}%` }}></div>
                </div>
              </div>
              
              {/* 技術標籤 (改用 flex-wrap 防止標籤過多溢出) */}
              <div className="flex flex-wrap gap-3">
                {item.tech.map((t, i) => (
                  <span key={i} className={`px-4 py-1.5 rounded-full text-xs tracking-wider uppercase font-mono transition-colors duration-300 border ${getTechStyle(t)}`}>{t}</span>
                ))}
              </div>
            </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
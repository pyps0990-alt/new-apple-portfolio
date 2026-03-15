import React from 'react';
import { motion } from 'framer-motion';

// 這個組件會把它包住的所有內容，加上 Apple 風格的滑順上浮動畫
export default function FadeIn({ children, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // 初始狀態：透明、往下偏移 30px
      whileInView={{ opacity: 1, y: 0 }} // 進入畫面時：完全不透明、回到原位
      viewport={{ once: true, margin: "-100px" }} // 只觸發一次，且提早/延後 100px 觸發
      transition={{ 
        duration: 0.8, // 動畫長度 0.8 秒
        delay: delay, // 延遲時間
        ease: [0.21, 0.47, 0.32, 0.98] // 這是精心調校的 Apple 貝茲曲線，呈現「快出慢停」的高級感
      }}
    >
      {children}
    </motion.div>
  );
}
import React from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      // 設定極高的 z-index 以覆蓋全畫面，並支援深/淺色模式
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gray-50 dark:bg-black text-gray-900 dark:text-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }} // 離場時往上微幅移動並淡出
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-center gap-6"
      >
        {/* Logo 標誌 */}
        <span className="text-2xl md:text-3xl font-semibold tracking-widest uppercase">PORTFOLIO.</span>
        
        {/* 進度條動畫 */}
        <div className="w-48 h-[2px] bg-gray-200 dark:bg-gray-800 overflow-hidden relative rounded-full">
          <motion.div
            className="absolute top-0 left-0 h-full bg-gray-900 dark:bg-white"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
"use client"

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-900 text-white">
      <header className="w-full flex justify-between items-center">
        <h2 className="text-xl">[PRODUCT NAME]</h2>
        <button className="bg-black text-white px-4 py-2 rounded-full">Get Started Now</button>
      </header>
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl">
        <motion.h1  
          className="text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Learn, Map, Recycle, Earn, and Make a Difference with Oily!
        </motion.h1>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Turn used cooking oil into rewards and help create a sustainable future
        </motion.p>
        <motion.div 
          className="w-full max-w-2xl rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
        <motion.video 
          className="w-full h-full object-cover"
          initial={{ filter: 'blur(10px)' }}
          animate={{ filter: 'blur(0px)' }}
          transition={{ duration: 0.5, delay: 0.6 }}
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src="/thrifting.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </motion.video>
        </motion.div>
      </main>
    </div>
  );
}

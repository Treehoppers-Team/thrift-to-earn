"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ConnectWalletButton } from './components/ConnectWallet';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-tpeach text-tgreen">
      <header className="w-full flex justify-between items-center">
        <h2 className="text-3xl font-news font-medium text-tgreen">Thriftr</h2>
        {/* <button className="bg-[#004ead] text-white px-4 py-2 rounded-full font-news">Sign In</button> */}
      </header>
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl">
        <motion.h1  
          className="text-5xl font-bold leading-tight font-news text-tgreen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Thrift-to-Earn is here.
        </motion.h1>
        <motion.p 
          className="text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Promote sustainability in style and get rewarded with $B3TR
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

        <ConnectWalletButton />

        <div className='my-6 flex flex-col space-y-6'>
          <Link 
            href='/user'
          >
            <button className='rounded-full bg-white px-8 py-4'>
              I am a Thrifter
            </button>
          </Link>

          <Link 
            href='/merchant'
          >
            <button className='rounded-full bg-white px-8 py-4'>
              I am a Merchant
            </button>
          </Link>
        </div>

      </main>
    </div>
  );
}

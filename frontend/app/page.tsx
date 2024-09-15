"use client"

import { motion } from 'framer-motion';
import Link from 'next/link';
import { WalletButton } from '@vechain/dapp-kit-react';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen md:p-8 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-neutral-900">
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl p-4">
        <motion.h1  
          className="text-5xl font-bold leading-tight font-news text-white"
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

        <div className='my-6 flex flex-col space-y-6'>
          <Link 
            href='/user'
          >
            <button className='rounded-full bg-tgreen px-8 py-4'>
              I am a Thrifter
            </button>
          </Link>

          <Link 
            href='/merchant'
          >
            <button className='rounded-full bg-tgreen px-8 py-4'>
              I am a Merchant
            </button>
          </Link>
        </div>

      </main>

      <footer className="bg-tgreen min-h-full text-white w-full p-4 text-center flex flex-col space-y-2">
        <p>Built by Thrifthoppers</p>
        <p>VeChain x EasyA x BCG Hackathon 2024</p>
      </footer>
    </div>
  );
}

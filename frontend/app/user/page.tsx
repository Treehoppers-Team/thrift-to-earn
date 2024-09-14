"use client"

import Link from 'next/link';
import QrReader from 'react-qr-scanner';
import QRCode from "react-qr-code";
import { useState, useEffect } from 'react'; 

export default function User() {
  const [result, setResult] = useState('No result');

  const handleScan = (data: any | null) => {
    if (data) {
      console.log("Scanned data:", data); // Logs the entire data object
      console.log("Scanned text:", data?.text); // Logs the wallet address
      setResult(data?.text); // Update the state with the scanned text (wallet address)
    }
  };

  const handleError = (err: any) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-900 text-white">
      <header className="w-full flex justify-between items-center">
        <h2 className="text-2xl font-news">Thriftr</h2>
        <button className="bg-black text-white px-4 py-2 rounded-full font-news">Get Started Now</button>
      </header>
      <main className="flex flex-col gap-8 items-center text-center max-w-4xl">

        
        <div className='bg-white p-4'>
          <QRCode value="0xb15D296fA2a1077f6bD38CA6f6Fb676Ceb599998" />
        </div>
        
        <p>{result}</p>
        <button onClick={() => document.querySelector('video')?.click()}>Open Image Dialog</button>
        {/* <Link 
          href='/merchant'
        >
          I am a Merchant
        </Link>

        <Link 
          href='/merchant'
        >
          I am a Thriftr
        </Link> */}
        

      </main>
    </div>
  );
}

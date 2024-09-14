"use client";

import QrReader from "react-qr-scanner";
import { useState } from "react";

export default function Merchant() {
  const [tshirtCount, setTshirtCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const [walletAddress, setWalletAddress] = useState("");
  const [scanning, setScanning] = useState(false);

  const handleScan = (data: any | null) => {
    if (data) {
      setWalletAddress(data?.text);
      setScanning(false); // Stop scanning after getting the result
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
        <button className="bg-black text-white px-4 py-2 rounded-full font-news">
          Get Started Now
        </button>
      </header>

      <main className="flex flex-col gap-8 items-center text-center max-w-full">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <label>
            Number of T-shirts:
            <div className="flex items-center">
              <button
                onClick={() => setTshirtCount(tshirtCount > 0 ? tshirtCount - 1 : 0)}
                className="px-3 py-2 bg-gray-700 text-white rounded-l-lg"
              >
                -
              </button>
              <input
                type="number"
                value={tshirtCount}
                onChange={(e) => setTshirtCount(Number(e.target.value))}
                className="bg-black text-center"
                min="0"
              />
              <button
                onClick={() => setTshirtCount(tshirtCount + 1)}
                className="px-3 py-2 bg-gray-700 text-white rounded-r-lg"
              >
                +
              </button>
            </div>
          </label>

          <label>
            Number of Pants:
            <div className="flex items-center">
              <button
                onClick={() => setPantsCount(pantsCount > 0 ? pantsCount - 1 : 0)}
                className="px-3 py-2 bg-gray-700 text-white rounded-l-lg"
              >
                -
              </button>
              <input
                type="number"
                value={pantsCount}
                onChange={(e) => setPantsCount(Number(e.target.value))}
                className="bg-black text-center"
                min="0"
              />
              <button
                onClick={() => setPantsCount(pantsCount + 1)}
                className="px-3 py-2 bg-gray-700 text-white rounded-r-lg"
              >
                +
              </button>
            </div>
          </label>

          <label>
            Wallet Address:
            <div className="flex flex-col min-w-full">
              {walletAddress ? (<input
                type="text"
                value={walletAddress}
                readOnly
                className="bg-black text-center w-full p-2"
                placeholder="Scan your wallet address"
              />) : null}
              <button
                onClick={() => setScanning(true)}
                className="px-4 py-2 mt-2 bg-gray-700 text-white rounded-full"
              >
                Scan QR Code
              </button>
            </div>
          </label>
        </div>

        {scanning && (
          <QrReader
            delay={300}
            style={previewStyle}
            onError={handleError}
            onScan={handleScan}
            legacyMode={true}
          />
        )}
      </main>
    </div>
  );
}

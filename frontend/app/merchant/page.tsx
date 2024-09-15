"use client";

import {
  WalletButton,
  useWallet,
  useWalletModal,
} from "@vechain/dapp-kit-react";
import { useState, useEffect } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";
import Link from "next/link";
import { useThrift } from "../context/thriftContext";

export default function Merchant() {
  const [tshirtCount, setTshirtCount] = useState(0);
  const [pantsCount, setPantsCount] = useState(0);
  const { walletAddress, setWalletAddress } = useThrift();
  const [userWalletAddress, setUserWalletAddress] = useState("");
  const [scanning, setScanning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const handleScan = (result: any) => {
    if (!!result && result[0]?.rawValue) {
      try {
        setUserWalletAddress(result[0].rawValue);
        setScanning(false); // Stop scanning after getting the result
      } catch (err) {
        console.log("Error parsing QR data");
        console.log(result);
      }
    }
  };

  const handleError = (err: any) => {
    console.log("Error accessing camera: " + err.message);
  };

  const previewStyle = {
    height: 260,
    width: 260,
  };

  useEffect(() => {
    // Perform an action when walletAddress changes
    if (walletAddress) {
      console.log(`Wallet address changed: ${walletAddress}`);
      // You can also perform any side effects here
      // For example, updating the UI or making an API call
    }
  }, [walletAddress]); // Dependency array to watch for changes

  const handleSubmit = async () => {
    setIsLoading(true);
    console.log("User Wallet Address:", userWalletAddress);
    const defaultAmount = 3;
    console.log("Amount being transferred: ", defaultAmount)
    try {
      const response = await fetch('http://localhost:8000/distribute-rewards', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: defaultAmount,
          walletAddress: userWalletAddress,
        }),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      console.log('Response from server:', data);
      alert("Rewards distributed successfully" + data.txID);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-neutral-900">
      <main className="flex flex-col gap-8 items-center text-center max-w-full text-white">
        <div className="flex flex-col justify-center items-center gap-4 text-center">
          <div className="py-2 bg-black px-8 mb-8 rounded-full">
            <h1 className="font-news text-xl">Merchant</h1>
          </div>

          <label>
            Number of T-shirts:
            <div className="flex justify-center items-center h-10 w-full my-2">
              <button
                onClick={() =>
                  setTshirtCount(tshirtCount > 0 ? tshirtCount - 1 : 0)
                }
                className="px-3 h-full bg-gray-700 text-white rounded-l-lg flex items-center justify-center w-1/4"
              >
                -
              </button>
              <input
                type="number"
                value={tshirtCount}
                onChange={(e) => setTshirtCount(Number(e.target.value))}
                className="bg-black text-center h-full w-2/4 px-2"
                min="0"
              />
              <button
                onClick={() => setTshirtCount(tshirtCount + 1)}
                className="px-3 h-full bg-gray-700 text-white rounded-r-lg flex items-center justify-center w-1/4"
              >
                +
              </button>
            </div>
          </label>

          <label>
            Number of Pants:
            <div className="flex justify-center items-center h-10 w-full my-2">
              <button
                onClick={() =>
                  setPantsCount(pantsCount > 0 ? pantsCount - 1 : 0)
                }
                className="px-3 h-full bg-gray-700 text-white rounded-l-lg flex items-center justify-center w-1/4"
              >
                -
              </button>
              <input
                type="number"
                value={pantsCount}
                onChange={(e) => setPantsCount(Number(e.target.value))}
                className="bg-black text-center h-full w-2/4 px-2"
                min="0"
              />
              <button
                onClick={() => setPantsCount(pantsCount + 1)}
                className="px-3 h-full bg-gray-700 text-white rounded-r-lg flex items-center justify-center w-1/4"
              >
                +
              </button>
            </div>
          </label>

          <label>
            Wallet Address:
            <div className="flex flex-col min-w-full">
              {userWalletAddress ? (
                <input
                  type="text"
                  value={userWalletAddress}
                  readOnly
                  className="bg-black text-center w-full p-2"
                  placeholder="Scan your wallet address"
                />
              ) : null}
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
          <div style={previewStyle}>
            <Scanner
              scanDelay={300}
              onScan={handleScan}
              onError={handleError}
            />
          </div>
        )}
    {isLoading ? (
      <button
        className="px-4 py-2 mt-2 bg-gray-500 text-white rounded-full cursor-not-allowed"
        disabled
      >
        <span className="flex items-center justify-center">
          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Loading...
        </span>
      </button>
    ) : (
      <button
        className="px-4 py-2 mt-2 bg-gray-700 text-white rounded-full"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </button>
    )}
      </main>
    </div>
  );
}

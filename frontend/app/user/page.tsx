"use client";

import { useWallet, useWalletModal } from "@vechain/dapp-kit-react";
import { useEffect, useState } from "react";


export default function Merchant() {

  const { account } = useWallet();
  const { onConnectionStatusChange } = useWalletModal();
  const [, setConnectionStatus] = useState(false);

  useEffect(() => {
    const unsubscribe = onConnectionStatusChange(() => {
      setConnectionStatus(prev => !prev); // Toggle to force re-render
    });

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [onConnectionStatusChange]);

  // Transaction data
  const transactions = [
    {
      date: "15-09-2024",
      txHash:
        "0x550983f9552a12ad374b262dd695c8a40bb8f4f805a0e840f8ffd51daa2afd0f",
      tokens: "10 TKN",
    },
    {
      date: "15-09-2024",
      txHash:
        "0xae6d38d090a3c6cae1f07208915fb96d9f1fa483545ba7deee43d6c03af2a1bf",
      tokens: "20 TKN",
    },
    {
      date: "15-09-2024",
      txHash:
        "0x0d3482a7874fd0b1506d70e3649cdb68d9c5d339131486d611e9a5e043ada85e",
      tokens: "10 TKN",
    },
  ];

  // Function to shorten transaction hash
  const shortenTxHash = (txHash: string) => {
    return `${txHash.slice(0, 6)}...${txHash.slice(-4)}`;
  };

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-center justify-items-center min-h-screen p-4 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-neutral-900">
      {!account ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-2xl text-white mb-4">
            Please connect your wallet
          </h1>
        </div>
      ) : (
        <main className="flex flex-col gap-12 items-center text-center max-w-full w-full text-white">
          <div className="flex flex-col justify-center items-center gap-8 text-center w-full max-w-4xl">
            <div className="py-3 bg-black px-10 mb-8 rounded-full">
              <h1 className="font-news text-2xl">Thrifter</h1>
            </div>

            <div className="w-full overflow-hidden rounded-lg shadow-lg">
              <table className="min-w-full bg-black text-white text-center">
                <thead className="bg-[#001e00]">
                  <tr>
                    <th className="px-6 py-4 text-sm font-semibold uppercase">Date</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase">Transaction Hash</th>
                    <th className="px-6 py-4 text-sm font-semibold uppercase">Tokens Distributed</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-700">
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="hover:bg-gray-900">
                      <td className="px-6 py-4">{transaction.date}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`https://explore.vechain.org/transactions/${transaction.txHash}#info`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          {shortenTxHash(transaction.txHash)}
                        </a>
                      </td>
                      <td className="px-6 py-4">{transaction.tokens}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="py-3 bg-black px-10 mt-10 rounded-full text-lg">
              40 Tokens Available
            </div>
            <button className="rounded-[20px] hover:bg-tgreen  bg-[#001e00] px-10 py-4 text-lg font-semibold hover:bg-opacity-90 transition-colors">
              Redeem
            </button>
          </div>
        </main>
      )}
    </div>
  );
}

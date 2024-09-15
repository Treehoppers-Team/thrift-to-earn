"use client";

import {
  WalletButton,
  useWallet,
  useWalletModal,
} from "@vechain/dapp-kit-react";
import Link from "next/link";
import { useThrift } from "../context/thriftContext";
import { ConnectWalletButton } from "../components/ConnectWallet";

export default function Merchant() {
  // Transaction data
  const { walletAddress, setWalletAddress } = useThrift();
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
      <header className="w-full flex justify-between items-center">
        <Link href="/">
          <h2 className="text-3xl font-news text-tpeach">Thriftr</h2>
        </Link>
        {/* <WalletButton /> */}
        <ConnectWalletButton/>
      </header>
      {!walletAddress ? (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <h1 className="text-2xl text-white mb-4">
            Please connect your wallet
          </h1>
        </div>
      ) : (
        <main className="flex flex-col gap-8 items-center text-center max-w-full text-white">
          <div className="flex flex-col justify-center items-center gap-4 text-center">
            <div className="py-2 bg-black px-8 mb-8 rounded-full">
              <h1 className="font-news text-xl">Thrifter</h1>
            </div>

            <table className="min-w-full bg-black text-white text-center">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-600 px-4 py-2">Date</th>
                  <th className="border-b-2 border-gray-600 px-4 py-2">
                    Transaction Hash
                  </th>
                  <th className="border-b-2 border-gray-600 px-4 py-2">
                    Tokens Distributed
                  </th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction, index) => (
                  <tr key={index}>
                    <td className="border-t border-gray-600 px-4 py-2">
                      {transaction.date}
                    </td>
                    <td className="border-t border-gray-600 px-4 py-2">
                      <a
                        href={`https://explore.vechain.org/transactions/${transaction.txHash}#info`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                      >
                        {shortenTxHash(transaction.txHash)}
                      </a>
                    </td>
                    <td className="border-t border-gray-600 px-4 py-2 ">
                      {transaction.tokens}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* Spacing below the table for "40 Tokens Available" */}
            <div className="py-2 bg-black px-8 mt-8 rounded-full">
              40 Tokens Available
            </div>
            <button className="rounded-full bg-tgreen px-8 py-4">Redeem</button>
          </div>
        </main>
      )}
    </div>
  );
}

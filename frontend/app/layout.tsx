'use client';

import localFont from "next/font/local";
import "./globals.css";
// import type { WalletConnectOptions } from '@vechain/dapp-kit';
import dynamic from 'next/dynamic';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const DAppKitProvider = dynamic(
  async () => {
      const { DAppKitProvider: _DAppKitProvider } = await import(
          '@vechain/dapp-kit-react'
      );
      return _DAppKitProvider;
  },
  {
      ssr: false,
  },
);


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/rxf8obd.css" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
                <DAppKitProvider
                    genesis="test"
                    logLevel="DEBUG"
                    nodeUrl="https://testnet.vechain.org/"
                    usePersistence
                    // walletConnectOptions={walletConnectOptions}
                >
                    {children}
                </DAppKitProvider>      </body>
    </html>
  );
}

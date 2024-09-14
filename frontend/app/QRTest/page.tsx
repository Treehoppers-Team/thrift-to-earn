"use client";
import QrCodeScanner from "../components/QRCodeScanner";

export default function Home() {
  return (
    <div>
      <h1>Scan QR Code</h1>
      <QrCodeScanner />
    </div>
  );
}

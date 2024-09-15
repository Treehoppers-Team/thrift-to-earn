import { WalletButton } from "@vechain/dapp-kit-react";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4">
      <h2 className="text-3xl font-news text-tpeach">Thriftr</h2>
      <WalletButton />
    </header>
  );
}

import { WalletButton } from "@vechain/dapp-kit-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center p-4 bg-neutral-900">
      <Link href="/">
        {" "}
        <h2 className="text-3xl font-news text-tpeach">Thriftr</h2>
      </Link>
      <WalletButton />
    </header>
  );
}

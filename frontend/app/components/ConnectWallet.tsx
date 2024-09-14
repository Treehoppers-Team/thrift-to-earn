"use client"; // <-- This is the key part

import { Button, Fade, Text } from "@chakra-ui/react";
import { useEffect, useState, useCallback } from "react";
import { useWallet, useWalletModal } from "@vechain/dapp-kit-react";

export const ConnectWalletButton = () => {
  const { account } = useWallet();
  const { open, onConnectionStatusChange } = useWalletModal();
  const [isClient, setIsClient] = useState(false);
  const [buttonText, setButtonText] = useState("Connect Wallet");

  const handleConnected = useCallback((address: string | null) => {
    if (address) {
      const formattedAddress = `${address.slice(0, 6)}...${address.slice(-4)}`;
      setButtonText(`Disconnect ${formattedAddress}`);
    } else {
      setButtonText("Connect Wallet");
    }
  }, []);

  useEffect(() => {
    setIsClient(true);
    handleConnected(account);
  }, [account, handleConnected]);

  useEffect(() => {
    const unsubscribe = onConnectionStatusChange(handleConnected);
    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [onConnectionStatusChange, handleConnected]);

  if (!isClient) return null;

  return (
    <Fade in={true}>
      <Button
        onClick={open}
        colorScheme={account ? "gray" : "primary"}
        size="md"
        rounded={account ? "full" : "md"}
        bg={account ? "rgba(235, 236, 252, 1)" : undefined}
        color={account ? "black" : undefined}
        data-testid="connect-wallet"
      >
        <Text fontWeight={account ? "400" : "normal"}>{buttonText}</Text>
      </Button>
    </Fade>
  );
};

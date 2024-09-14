"use client"; // <-- This is the key part

import { Button, Fade, HStack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWallet, useWalletModal } from "@vechain/dapp-kit-react";

export const ConnectWalletButton = () => {
  const { account } = useWallet();
  const { open } = useWalletModal();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures this runs only in the browser
  }, []);

  if (!isClient) return null; // Don't render anything on the server side

  if (!account) {
    return (
      <Fade in={true}>
        <Button
          onClick={open}
          colorScheme="primary"
          size="md"
          data-testid="connect-wallet"
        >
          Connect Wallet
        </Button>
      </Fade>
    );
  }

  return (
    <Fade in={true}>
      <Button
        onClick={open}
        rounded={"full"}
        color="black"
        size="md"
        bg="rgba(235, 236, 252, 1)"
      >
        <HStack spacing={2}>
          <Text fontWeight={"400"}>{account}</Text>
        </HStack>
      </Button>
    </Fade>
  );
};

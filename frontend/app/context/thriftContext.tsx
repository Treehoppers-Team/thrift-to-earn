import React, { createContext, useContext, useState } from "react";

interface ThriftProviderProps {
  children: React.ReactNode; // Children can be any valid React node
}

// Define the type for the context value
interface ThriftContextValue {
  walletAddress: string | null; // Wallet address can be a string or null
  setWalletAddress: React.Dispatch<React.SetStateAction<string | null>>; // Function to update wallet address
}

export const ThriftContext = createContext<ThriftContextValue | undefined>(
  undefined
);

export const ThriftProvider: React.FC<ThriftProviderProps> = ({ children }) => {
  const [walletAddress, setWalletAddress] = useState<string | null>(null); // State for wallet address

  const value: ThriftContextValue = {
    walletAddress,
    setWalletAddress,
  };

  return (
    <ThriftContext.Provider value={value}>{children}</ThriftContext.Provider>
  );
};

export const useThrift = () => {
  const context = useContext(ThriftContext);
  if (context === undefined) {
    throw new Error("useThrift must be used within a ThriftProvider");
  }
  return context;
};

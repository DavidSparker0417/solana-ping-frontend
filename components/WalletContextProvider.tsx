import { ConnectionProvider, WalletProvider } from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import { FC, ReactNode, useMemo } from "react";
import "@solana/wallet-adapter-react-ui/styles.css";
import * as walletAdapterWallets from '@solana/wallet-adapter-wallets';

const WalletContextProvider: FC<{children: ReactNode}> = ({children}) => {
  const endpoint = clusterApiUrl('devnet');
  const wallets = [new walletAdapterWallets.PhantomWalletAdapter()]
  return(
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <WalletModalProvider>
          {children}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default WalletContextProvider;
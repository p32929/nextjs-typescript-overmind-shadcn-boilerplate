import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";

const AllProviders = dynamic(() => import('@/components/utils/AllProviders'), { ssr: false });

export default function App({ Component, pageProps }: AppProps) {
  return <AllProviders>
    <Component {...pageProps} />
  </AllProviders>
}

import MainNavigation from "@/components/menu/MainNavigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <MainNavigation>
        <Component {...pageProps} />
      </MainNavigation>
    </>
  );
}

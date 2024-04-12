import MainNavigation from "@/components/menu/MainNavigation";
import "@/styles/globals.css";
import apolloClientInstance from "@/util/graphql/apollo-client";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  const apolloClient = apolloClientInstance();
  return (
    <ApolloProvider client={apolloClient}>
      <MainNavigation>
        <Component {...pageProps} />
      </MainNavigation>
    </ApolloProvider>
  );
}

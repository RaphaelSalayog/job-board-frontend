import {
  ApolloClient,
  InMemoryCache,
  concat,
  createHttpLink,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { useRouter } from "next/router";

const apolloClientInstance = () => {
  const router = useRouter();
  const httpLink = createHttpLink({ uri: process.env.NEXT_PUBLIC_API_URL });
  const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem("token");
    return {
      // return the headers to the context so httpLink can read them
      // to send an authorization header for every request to the graphql
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : "",
      },
    };
  });

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    console.log(graphQLErrors);
    if (graphQLErrors) {
      graphQLErrors.forEach(({ extensions }) => {
        const qwe = extensions as any;
        if (qwe?.extensions?.code === "UNAUTHENTICATED") {
          // clear the token from local storage
          localStorage.removeItem("token");
          // redirect the user to the login page
          router.push("/login");
        }
      });
    }
    if (networkError) {
      console.log(`[Network error]: ${networkError}`);
    }
  });

  const apolloClient = new ApolloClient({
    link: concat(authLink, httpLink), // We use link instead uri to chain links because uri automatically sets the links. the order is important (authLink first before httpLink).
    cache: new InMemoryCache(),
    connectToDevTools: true, // To use Apollo Dev Tools
  });
  return apolloClient;
};

export default apolloClientInstance;

// - Same as authLink at the top -
// const authLink = new ApolloLink((operation: Operation, forward: NextLink) => {
//   // 'operation' - an object representing the GraphQL query or mutation. It is also important to add name to query or mutation so that the operationName is not undefined.
//   // 'forward' - to forward the operation to the next link in the chain.
//   const token = localStorage.getItem("token");
//   operation.setContext({
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return forward(operation);
// });

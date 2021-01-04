import { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import theme from "../utils/extendDefaultTheme";
import gtag from "../utils/gtag";

import "../styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;

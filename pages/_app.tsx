import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import theme from "../utils/extendDefaultTheme";

import "../styles.css";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;

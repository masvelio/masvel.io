import { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import "../styles.css";

const styles = {
  global: (props) => ({
    ".notion": {
      color: props.colorMode === "dark" ? "white" : "",
    },
  }),
};

const theme = extendTheme({ styles });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

import { AppProps } from "next/app";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import "../styles.css";

const styles = {
  global: (props) => ({
    body: {
      color: props.colorMode === "dark" ? "white" : "#353f4b",
      background: props.colorMode === "dark" ? "#100818" : "white",
    },
    ".notion": {
      color: props.colorMode === "dark" ? "white" : "#353f4b",
      fontFamily: "Poppins",
      fontSize: ["md", "lg"],
    },
    ".notion h1, .notion h2, .notion h3": {
      fontFamily: "Playfair Display",
    },
    ".notion-h1": {
      fontSize: ["4xl", "5xl"],
    },
    ".notion-h2": {
      fontSize: ["3xl", "4xl"],
    },
    ".notion-h3": {
      fontSize: ["2xl", "3xl"],
    },
  }),
};

const fonts = {
  heading: "Playfair Display",
  body: "Poppins",
};

const theme = extendTheme({ styles, fonts });

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

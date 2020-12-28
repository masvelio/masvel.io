import { extendTheme } from "@chakra-ui/react";

const styles = {
  global: (props) => ({
    body: {
      color: props.colorMode === "dark" ? "white" : "gray.font",
      background: props.colorMode === "dark" ? "purple.1000" : "white",
      fontSize: ["md", "lg"],
    },
    ".notion": {
      color: props.colorMode === "dark" ? "white" : "gray.font",
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
      position: "relative",
      display: "inline",
      backgroundImage:
        props.colorMode === "dark"
          ? `linear-gradient(120deg, ${props.theme.colors.pink["800"]} 0%, ${props.theme.colors.blue["800"]} 100%)`
          : `linear-gradient(120deg, ${props.theme.colors.pink["100"]} 0%, ${props.theme.colors.blue["100"]} 100%)`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "100% 0.4em",
      backgroundPosition: "0 88%",
    },
    ".notion-h3": {
      fontSize: ["2xl", "3xl"],
    },
    ".notion-link": {
      background: props.colorMode === "dark" ? "purple.700" : "purple.100",
      padding: "0 4px",
      fontWeight: "bold",
      textDecoration: "none",
      _hover: {
        textDecoration: "underline",
      },
    },
    ".notion-callout": {
      padding: [3, 5],
      borderRadius: "lg",
      boxShadow: props.colorMode === "dark" ? "lgLight" : "md",
    },
    ".notion-callout .notion-emoji": {
      display: "none",
    },
  }),
};

const fonts = {
  heading: "Playfair Display",
  body: "Poppins",
};

const colors = {
  purple: {
    1000: "#100818",
    "1000:alpha": "rgba(16, 8, 24, 0.6)",
  },
  gray: {
    font: "#353f4b",
  },
};

const shadows = {
  mdLight:
    "0 4px 6px -1px rgba(255, 255, 255, 0.1), 0 2px 4px -1px rgba(255, 255, 255, 0.06)",
  lgLight:
    "0 10px 15px -3px rgba(255, 255, 255, 0.1), 0 4px 6px -2px rgba(255, 255, 255, 0.05)",
  "light-lg":
    "rgba(255, 255, 255, 0.1) 0px 0px 0px 1px, rgba(255, 255, 255, 0.2) 0px 5px 10px, rgba(255, 255, 255, 0.4) 0px 15px 40px",
};

export default extendTheme({ styles, fonts, colors, shadows });

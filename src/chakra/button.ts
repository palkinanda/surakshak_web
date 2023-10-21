import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: "60px",
    fontSize: "10pt",
    fontWeight: 700,
    _focus: {
      boxShadow: "none",
    },
  },
  sizes: {
    sm: {
      fontSize: "8pt",
    },
    md: {
      fontSize: "10pt",
      // height: "28px",
    },
  },
  variants: {
    solid: {
      color: "white",
      bg: "#765DE5;",
      _hover: {
        bg: "#A997FF;",
      },
    },
    outline: {
      color: "#765DE5;",
      border: "1px solid",
      borderColor: "#765DE5;",
    },
    oauth: {
      height: "34px",
      border: "1px solid",
      borderColor: "#765DE5;",
      _hover: {
        bg: "#765DE5;",
      },
    },
  },
};

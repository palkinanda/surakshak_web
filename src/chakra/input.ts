import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Input: ComponentStyleConfig = {
  baseStyle: {
    field: {
      fontSize: "10pt",
      bg: "#FF96AA",
      _placeholder: {
        color: "#765DE5",
      },
      _hover: {
        bg: "white",
        border: "1px solid",
        borderColor: "#765DE5",
      },
      _focus: {
        outline: "none",
        border: "1px solid",
        borderColor: "#765DE5",
      },
    },
    addons: {
      height: "30px",
    },
  },
  sizes: {
    md: {
      field: {
        // height: "30px",
        fontSize: "10pt",
      },
    },
  },
  variants: {},
  defaultProps: {
    variant: null,
  },
};

import { createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false; // removes the `xs` breakpoint
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    text: {
      primary: "#fff",
    },
    background: {
      default: "#171F2F",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 410,
      laptop: 410,
      desktop: 410,
    },
  },
  typography: {
    caption: {
      fontSize: "18px",
      lineHeight: "24px",
      fontWeight: 700,
    },
    body1: {
      fontSize: "14px",
      fontWeight: 500,
      lineHeight: "normal",
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          background: "#171F2F",
          borderRadius: "4px",
          padding: "7px",
          fontSize: "13px",
          lineHeight: "10px",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: "#131823",
          boxShadow: "0px 0px 0px 1px #5B6178",
          color: "#fff",
          height: "40px",
          borderRadius: "6px",
          "input::placeholder": {
            color: "#7185AA",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "0px !important",
            boxShadow: "0px 0px 0px 1px #663CDD inset, 0px 0px 0px 4px #B89FFF",
          },
        },
      },
    },
  },
});

export default theme;

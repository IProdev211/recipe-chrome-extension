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
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: "Bai Jamjuree",
          color: "#fff",
        },
      },
    },
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
          paddingTop: "0px !important",
          paddingBottom: "0px !important",
          ":hover": {
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
          input: {
            height: "40px",
            boxSizing: "border-box",
          },
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
    MuiAutocomplete: {
      styleOverrides: {
        noOptions: {
          color: "#fff",
        },
        popper: {
          transform: "translate(24px, 74px) !important",
        },
        listbox: {
          padding: "8px",
        },
        option: {
          "&.Mui-focused": {
            backgroundColor: "#181F30",
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        iconOutlined: {
          path: {
            fill: "#fff",
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#FB2047 !important",
          fontWeight: 500,
          fontSize: "11px",
          lineHeight: 1,
          margin: "6px 8px 0",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "6px",
          background: "#121826",
          boxShadow: "0px 10px 30px 3px rgba(0, 0, 0, 0.40)",
        },
      },
    },
  },
});

export default theme;

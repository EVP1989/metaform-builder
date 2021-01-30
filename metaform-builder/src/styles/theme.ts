import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);

export default createMuiTheme({
    palette: {
      primary: {
        main: "#1068B3",
        dark: "#1076cc"
      },
      secondary: { 
        main: "#fff",
        dark: "#eee"
      },
      background: {
        default: "#ffffff",
        paper: "#F5EFEA"
      },
      text: {
        primary: "#000000",
        secondary: "#26201E",
        disabled: "#ddd",
        hint: "#eee"
      }
    },
    typography: {
      // Tells Material UI the font-size on the html element.
      htmlFontSize: 16,
      fontFamily: "Open Sans, sans-serif",
      h1: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 900
      },
      h2: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600
      },
      h3: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600
      },
      h4: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600
      },
      h5: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600
      },
      h6: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 600
      },
      body1: {
        fontFamily: "Rubik, sans-serif",
        fontWeight: "normal"
      },
      body2: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: "normal",
        fontSize: 16,
        lineHeight: "1.8rem"
      },
    }
  });
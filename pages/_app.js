import { ThemeProvider, createTheme } from "@mui/material/styles";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const THEME = createTheme({
    typography: {
      fontFamily: "Space Mono, monospace",
    },
  });
  return (
    <ThemeProvider theme={THEME}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;

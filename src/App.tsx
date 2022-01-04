import React from "react";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./Components/Layout";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Layout />
      </ThemeProvider>
    </>
  );
}

export default App;

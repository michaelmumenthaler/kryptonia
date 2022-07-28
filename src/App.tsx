import { createTheme, ThemeProvider } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
import Layout from "./Components/Layout";
import { PlayerContextProvider } from "./Gameplay/PlayerContext";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <PlayerContextProvider>
          <CssBaseline />
          <Layout />
        </PlayerContextProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

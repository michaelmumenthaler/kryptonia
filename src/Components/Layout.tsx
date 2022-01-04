import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import CoinBar from "./Menus/CoinBar";
import CenterField from "./CenterField";

export default function Layout() {
  return (
    <Stack
      spacing={2}
      height={"100vh"}
      style={{
        background: "radial-gradient(circle at center, #00333d 5%,  black 50%)",
      }}
    >
      <h1>GAME HERE PLS</h1>
      <CenterField />
      <CoinBar />
    </Stack>
  );
}

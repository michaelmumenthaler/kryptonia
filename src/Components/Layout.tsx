import Stack from "@mui/material/Stack";
import CoinBar from "./Menus/CoinBar";
import CenterField from "./CenterField";
import Typography from "@mui/material/Typography";
import Wallet from "./FieldComponents/Wallet";

export default function Layout() {
  return (
    <Stack
      spacing={2}
      height={"100vh"}
      style={{
        background:
          " radial-gradient(circle at center, #00333d 5%, #11151a 50%)",
      }}
    >
      <Stack
        style={{
          backgroundImage:
            "radial-gradient(circle at center, transparent 5%, #11151a 50%), linear-gradient(#b8fdff .1em, transparent .1em), linear-gradient(90deg, #b8fdff .1em, transparent .1em)",
          backgroundSize: "1em 1em",
        }}
      >
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="h2" gutterBottom component="div" paddingLeft={2}>
            KRYPTONIA
          </Typography>
          <Wallet />
        </Stack>

        <CenterField />
        <CoinBar />
      </Stack>
    </Stack>
  );
}

import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Divider, Fab } from "@mui/material";

export default function CoinBar() {
  return (
    <Stack
      spacing={1}
      direction="row"
      alignSelf={"center"}
      divider={<Divider orientation="vertical" flexItem />}
      paddingBottom={1}
    >
      <Fab>+</Fab>
      <Fab>+</Fab>
      <Fab>+</Fab>
      <Fab>+</Fab>
      <Fab>+</Fab>
      <Fab>+</Fab>
      <Fab>+</Fab>
      <Fab>+</Fab>
    </Stack>
  );
}

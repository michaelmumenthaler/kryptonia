import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { Divider, Fab, Typography } from "@mui/material";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

export default function CoinBar() {
  return (
    <Stack spacing={15} direction="row" alignSelf={"center"}>
      <Fab style={{ backgroundColor: "#F5C900" }}>
        <DisplaySettingsIcon />
      </Fab>
      <Stack
        spacing={1}
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        paddingBottom={2}
      >
        <Fab style={{ backgroundColor: "#00db3e" }}>
          <Typography variant="h4" component="div">
            A
          </Typography>
        </Fab>
        <Fab style={{ backgroundColor: "#F5453D" }}>
          <Typography variant="h4" component="div">
            B
          </Typography>
        </Fab>
        <Fab style={{ backgroundColor: "#0288d1" }}>
          <Typography variant="h4" component="div">
            Γ
          </Typography>
        </Fab>
        <Fab>
          <Typography variant="h4" component="div">
            Δ
          </Typography>
        </Fab>
        <Fab>
          <Typography variant="h4" component="div">
            Ε
          </Typography>
        </Fab>
        <Fab>
          <Typography variant="h4" component="div">
            Ζ
          </Typography>
        </Fab>
        <Fab>
          <Typography variant="h4" component="div">
            Η
          </Typography>
        </Fab>
      </Stack>
    </Stack>
  );
}

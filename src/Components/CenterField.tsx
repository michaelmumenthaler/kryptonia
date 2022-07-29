import Stack from "@mui/material/Stack";
import { useContext } from "react";
import ComputerImage from "../Assets/GrandmasRig.png";
import PlayerContext from "../Gameplay/PlayerContext";
import { MineAlphaCoin } from "./Coins/Alpha";
import { LinearProgress, Typography } from "@mui/material";

export default function CenterField() {
  const { state, dispatch } = useContext(PlayerContext);

  return (
    <Stack
      alignSelf={"center"}
      height={"80vh"}
      width={"50vw"}
      alignItems={"center"}
      justifyContent={"center"}
      flexGrow={1}
      gap={2}
    >
      <Stack
        direction="row"
        sx={{ minWidth: "10%" }}
        alignItems="center"
        gap={3}
      >
        <LinearProgress
          variant="determinate"
          value={50}
          sx={{
            borderRadius: 1,
            minWidth: "100%",
            minHeight: "1.5vh",
            transition: "none",
          }}
          color="info"
        />
      </Stack>
      <a
        onClick={() =>
          dispatch({
            type: "increment",
            payload: { id: 1 },
          })
        }
        style={{ cursor: "pointer" }}
      >
        <img
          src={ComputerImage}
          alt="Computer"
          width="135"
          height="120"
          style={{
            imageRendering: "pixelated",
            filter: "drop-shadow(0 0 100px #0ff)",
          }}
        />
      </a>
      <Typography variant="h5" sx={{ color: "gray" }}>
        Click to start mining!
      </Typography>
    </Stack>
  );
}

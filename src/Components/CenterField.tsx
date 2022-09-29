import Stack from "@mui/material/Stack";
import { useContext, useEffect } from "react";
import ComputerImage from "../Assets/GrandmasRig.png";
import PlayerContext from "../Gameplay/PlayerContext";
import { MineAlphaCoin } from "./Coins/Alpha";
import { LinearProgress, Typography } from "@mui/material";
import ICoin from "./Coins/ICoin";

export default function CenterField() {
  const { state, dispatch } = useContext(PlayerContext);

  const currentSelectedCoin = state.AltCoins.find(
    (altCoin: any) => altCoin.id === 1
  );

  const handleMiningButton = () => {
    MineAlphaCoin(state, dispatch);
  };

  return (
    <Stack
      alignSelf={"center"}
      height={"80vh"}
      width={"50vw"}
      alignItems={"center"}
      justifyContent={"center"}
      flexGrow={0}
      gap={2}
    >
      <Stack
        direction="row"
        sx={{ minWidth: "10%" }}
        alignItems="center"
        gap={3}
      >
        {state.activeMiners.length <= 0 ? (
          <LinearProgress
            variant="determinate"
            value={0}
            sx={{
              borderRadius: 1,
              minWidth: "100%",
              minHeight: "1.5vh",
              transition: "none",
            }}
            key={0}
            color="info"
          />
        ) : (
          state.activeMiners.map((miner: any, index: number) => {
            return (
              <LinearProgress
                variant="determinate"
                value={miner.progress}
                sx={{
                  borderRadius: 1,
                  minWidth: "100%",
                  minHeight: "1.5vh",
                  transition: "none",
                }}
                key={index}
                color="info"
              />
            );
          })
        )}
      </Stack>
      <a onClick={handleMiningButton} style={{ cursor: "pointer" }}>
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

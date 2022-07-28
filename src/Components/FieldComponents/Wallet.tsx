import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { PlayerContext } from "../../Gameplay/PlayerContext";

export function Wallet() {
  const game = useContext(PlayerContext);

  return (
    <Stack direction="column">
      <Stack direction="row">
        <Typography>Cash:</Typography>
        <Typography>{game.Cash}</Typography>
      </Stack>
      <Stack direction="row">
        <Typography>Kryptons:</Typography>
        <Typography>{game.Kryptons}</Typography>
      </Stack>
      {game.AltCoins.length > 0 ? (
        game.AltCoins.map((coin, index) => {
          <Stack direction="row">
            <Typography>{coin["Name"]}</Typography>
            <Typography>{coin["Amount"]}</Typography>
          </Stack>;
        })
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default Wallet;

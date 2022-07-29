import { Stack, Typography } from "@mui/material";
import { useContext } from "react";
import { PlayerContext } from "../../Gameplay/PlayerContext";
import ICoin from "../Coins/ICoin";

export function Wallet() {
  const { state } = useContext(PlayerContext);

  return (
    <Stack direction="column" sx={{ paddingRight: 5, paddingTop: 2 }}>
      <Typography variant="h5">{`Cash: ${state.Cash.toFixed(2)}`}</Typography>
      <Typography variant="h5">{`Kryptons: ${state.Kryptons.toFixed(
        8
      )}`}</Typography>
      {state.AltCoins.map((coin: ICoin, index: number) => {
        return (
          <Typography variant="h5" key={index}>
            {coin.properties.Name}: {coin.values.Amount}
          </Typography>
        );
      })}
    </Stack>
  );
}

export default Wallet;

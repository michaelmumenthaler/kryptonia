import { Stack, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { PlayerContext } from "../../Gameplay/PlayerContext";
import ICoin from "../Coins/ICoin";

export function Wallet() {
  const { state, dispatch } = useContext(PlayerContext);

  return (
    <Stack direction="column" sx={{ paddingRight: 5, paddingTop: 2 }}>
      <Stack direction="row">
        <Typography>{`Cash: ${state.Cash}`}</Typography>
      </Stack>
      <Stack direction="row">
        <Typography>{`Kryptons: ${state.Kryptons}`}</Typography>
      </Stack>
      {state.AltCoins.map((coin: ICoin, index: number) => {
        return (
          <Stack direction="row" key={index}>
            <Typography>
              {coin.properties.Name}: {coin.values.Amount}
            </Typography>
          </Stack>
        );
      })}
    </Stack>
  );
}

export default Wallet;

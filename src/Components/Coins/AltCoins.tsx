import { AlphaCoinValues } from "./Alpha";

export function InitializeAltCoins(PlayerContext: any) {
  const allAltCoins = [];
  // Add all altCoins to the array for initial load
  allAltCoins.push(AlphaCoinValues);
  PlayerContext.dispatch({
    type: "set-alt-coins",
    payload: { newAltcoinList: allAltCoins },
  });
}

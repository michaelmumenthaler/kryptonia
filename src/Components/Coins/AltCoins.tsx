import { useContext, useEffect } from "react";
import PlayerContext from "../../Gameplay/PlayerContext";
import { AlphaCoinValues } from "./Alpha";

export default function AltCoins() {
  const game = useContext(PlayerContext);
  const allAltCoins = [];
  allAltCoins.push(AlphaCoinValues);

  useEffect(() => {
    const unlockedAltCoins = game.updateAltCoins(...game.AltCoins);
  }, [game.UnlockedCoins]);
}

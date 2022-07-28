import { createContext, useState } from "react";

export const PlayerContext = createContext({
  PlayerName: "Anonymous",
  Cash: 0.0,
  Kryptons: 0.0,
  AltCoins: [],
  UnlockedCoins: [1], // Array for coin ID
  updatePlayerName: (name: string) => {},
  updateCash: (newValue: number) => {},
  updateKryptons: (newValue: number) => {},
  updateAltCoins: (newValue: any[]) => {},
  updateUnlockedCoins: (newValue: any[]) => {},
});

interface IPlayerContext {
  children?: React.ReactNode;
}

export function PlayerContextProvider(props: IPlayerContext) {
  let saveGame;

  if (localStorage.getItem("saveGame")) {
    saveGame = JSON.parse(localStorage.getItem("saveGame") as string);
  } else {
    saveGame = {
      PlayerName: "Anonymous",
      Cash: 0.0,
      Kryptons: 0.0,
      AltCoins: [],
      UnlockedCoins: [1],
    };
  }
  const [playerName, setPlayerName] = useState(saveGame.PlayerName);
  const [cash, setCash] = useState(saveGame.Cash);
  const [kryptons, setKryptons] = useState(saveGame.Kryptons);
  const [altCoins, setAltCoins] = useState(saveGame.AltCoins);
  const [unlockedCoins, setUnlockedCoins] = useState(saveGame.UnlockedCoins);

  return (
    <PlayerContext.Provider
      value={{
        PlayerName: playerName,
        updatePlayerName: setPlayerName,
        Cash: cash,
        updateCash: setCash,
        Kryptons: kryptons,
        updateKryptons: setKryptons,
        AltCoins: altCoins,
        updateAltCoins: setAltCoins,
        UnlockedCoins: unlockedCoins,
        updateUnlockedCoins: setUnlockedCoins,
      }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContext;

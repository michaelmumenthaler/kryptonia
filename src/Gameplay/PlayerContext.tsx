import { createContext, useReducer } from "react";
import { InitializeAltCoins } from "../Components/Coins/AltCoins";
import reducer from "./Reducer";

export interface IPlayerContext {
  state: any;
  dispatch: React.Dispatch<any>;
}

export const PlayerContext = createContext<IPlayerContext>({
  state: {},
  dispatch: () => null,
});

interface IPlayerContextElement {
  children?: React.ReactNode;
}

export function PlayerContextProvider(props: IPlayerContextElement) {
  let saveGame;

  if (localStorage.getItem("saveGame")) {
    saveGame = JSON.parse(localStorage.getItem("saveGame") as string);
  } else {
    saveGame = {
      PlayerName: "Anonymous",
      Cash: 0.0,
      Kryptons: 0.0,
      AltCoins: InitializeAltCoins(),
      // Array for coin ID
      UnlockedCoins: [1],
      /* Active miners:
       {id:123, progress: 50} Object of Coin ID to represent 
        active mining of a coin and progress in %
      */
      activeMiners: [],
      coinUpgradeModifiers: [], // Array for specific increment modifiers
    };
  }

  const [state, dispatch] = useReducer(reducer, saveGame);
  const value = { state, dispatch };

  return (
    <PlayerContext.Provider value={value}>
      {props.children}
    </PlayerContext.Provider>
  );
}

export default PlayerContext;

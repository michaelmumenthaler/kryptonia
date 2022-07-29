import { createContext, useEffect, useReducer, useState } from "react";
import ICoin from "../Components/Coins/ICoin";

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

function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment-krypton":
      return { ...state, Kryptons: state.Kryptons + 1 };
    case "set-alt-coins":
      return { ...state, AltCoins: action.payload.newAltcoinList };
    default:
      return state;
  }
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
      AltCoins: [],
      UnlockedCoins: [1], // Array for coin ID
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

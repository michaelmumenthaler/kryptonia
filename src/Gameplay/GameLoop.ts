import { useContext } from "react";
import PlayerContext from "./PlayerContext";

export default function useGameLoop(state: any, dispatch: React.Dispatch<any>) {
  setInterval(() => {
    //dispatch({ type: "increment", payload: { id: 1, IncrementValue: 1 } });
    // ### Main Game Loop ###
  }, 100);
}

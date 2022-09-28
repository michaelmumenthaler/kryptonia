import { useEffect } from "react";

export default function useGameLoop(state: any, dispatch: React.Dispatch<any>) {
  useEffect(() => {
    const intervalID = setInterval(() => {
      // ### Main Game Loop ###

      // get active miners from state and loop through them
      state.activeMiners.forEach((miner: any) => {
        // get the coin that the miner is mining
        let coin = state.AltCoins.find((coin: any) => coin.id === miner.id);

        // calculate the time difference between now and the first mined time
        let timeDifference = Date.now() - miner.firstMined;

        // calculate the progress of the miner based on the time difference in percentage
        let progress = (timeDifference / coin.values.TimeToMineInMS) * 100;
        if (progress >= 100) {
          dispatch({
            type: "increment",
            payload: {
              id: coin.id,
              IncrementValue: coin.values.IncrementValue,
            },
          });
          // Remove active miner from state after mining
          dispatch({
            type: "remove-miner",
            payload: {
              id: coin.id,
              progress: 0,
            },
          });
        } else {
          // if the time difference is less than the time to mine then increment the progress by the time difference
          dispatch({
            type: "mine",
            payload: {
              id: coin.id,
              progress: progress,
            },
          });
        }
      });

      //console.log(state)
      //console.log(state.activeMiners)

      // Save the game if no savegame is found in local storage
      // save the game if the savegame is older than 30 seconds
      if (
        localStorage.getItem("saveGame") === null ||
        Date.now() - state.lastSaved > 30000
      ) {
        dispatch({
          type: "save-game",
        });
      }
    }, 100);
    return () => clearInterval(intervalID);
  }, [state, dispatch]);
}

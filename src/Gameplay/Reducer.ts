export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "add-miner":

      let checkIfCoinIsAlreadyMining = state.activeMiners.filter(
        (miner: any) => miner.id === action.payload.id
      );

      if (checkIfCoinIsAlreadyMining.length > 0) {
        return { ...state };
      }

      // return the state with the new miner added to the active miners array
      return {
        ...state,
        activeMiners: [
          ...state.activeMiners,
          {
            id: action.payload.id,
            firstMined: Date.now(),
            progress: 0,
          },
        ],
      };

    case "remove-miner":
      // return the state with the miner removed from the active miners array
      let coinID = action.payload.id;
      console.log("Removing miner for coin: " + coinID);
      let newActiveMiners = state.activeMiners.filter(
        (miner: any) => miner.id !== coinID
      );

      return {
        ...state,
        activeMiners: newActiveMiners,
      };

    case "mine":
      let newProgress = action.payload.progress
      console.log("Mining coin: " + action.payload.id + " with progress: " + newProgress);  
      return { ...state, activeMiners: [ {
        id: action.payload.id,
        progress: newProgress,
        lastMined: Date.now(),
        firstMined: state.activeMiners.find((miner: any) => miner.id === action.payload.id).firstMined

      }] };
    case "increment":
      let coin = state.AltCoins.find(
        (coin: any) => coin.id === action.payload.id
      );
      const otherCoins = state.AltCoins.filter(
        (coin: any) => coin.id !== action.payload.id
      );

      coin.values.Amount += action.payload.IncrementValue;

      return {
        ...state,
        AltCoins: [...otherCoins, coin],
      };
    case "set-alt-coins":
      return { ...state, AltCoins: action.payload.newAltcoinList };
    case "reset":
      return {
        PlayerName: "Anonymous",
        Cash: 0.0,
        Kryptons: 0.0,
        AltCoins: [],
        activeMiners: [],
        UnlockedCoins: [1], // Array for coin ID
        coinUpgradeModifiers: [], // Array for specific increment modifiers
      };
    default:
      return state;
  }
}

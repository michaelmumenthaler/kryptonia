export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "addMiner":
      let checkIfCoinIsAlreadyMining = state.activeMiners.filter(
        (miner: any) => miner.id === action.payload.id
      );

      if (checkIfCoinIsAlreadyMining.length > 0) {
        return { ...state };
      }
      return {
        ...state,
        activeMiners: [
          ...state.activeMiners,
          { id: action.payload.id, progress: action.payload.progress },
        ],
      };
    case "mine":
      // TODO: add mining logic here
      return { ...state };
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

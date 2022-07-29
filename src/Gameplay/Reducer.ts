export default function reducer(state: any, action: any) {
  switch (action.type) {
    case "increment":
      let coin = state.AltCoins.filter(
        (coin: any) => coin.id === action.payload.id
      );
      const otherCoins = state.AltCoins.filter(
        (coin: any) => coin.id !== action.payload.id
      );

      coin[0].values.Amount += coin[0].values.IncrementValue;

      return {
        ...state,
        AltCoins: [...otherCoins, coin[0]],
      };
    case "set-alt-coins":
      return { ...state, AltCoins: action.payload.newAltcoinList };
    case "reset":
      return {
        PlayerName: "Anonymous",
        Cash: 0.0,
        Kryptons: 0.0,
        AltCoins: [],
        UnlockedCoins: [1], // Array for coin ID
      };
    default:
      return state;
  }
}

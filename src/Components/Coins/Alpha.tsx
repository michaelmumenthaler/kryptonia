import ICoin from "./ICoin";

export const AlphaCoinValues: ICoin = {
  id: 1,
  unlocked: true,
  properties: {
    Name: "Alpha Coin",
    Description: "Your first alt-coin!",
  },
  values: {
    Amount: 0,
    KryptonExchangeValue: 0.0001,
    CashExchangeValue: 0.01,
    StartAmount: 0,
    IncrementValue: 1, // Final calculated value to increment coin (After modifiers etc.)
    TimeToMineInMS: 30000,
  },
  upgrades: [
    {
      Name: "Mining speed",
      Description: "Reduce time to mine 1 coin",
      AmountBought: 0,
      Value: 1,
      ValueIncrement: 1,
      BasePrice: 100,
      PriceIncrement: 1.25,
      Limit: 999999,
    },
    {
      Name: "Mining efficiency",
      Description: "Increase mining output",
      AmountBought: 0,
      Value: 1,
      ValueIncrement: 1,
      BasePrice: 250,
      PriceIncrement: 1.5,
      Limit: 999999,
    },
    {
      Name: "Online Marketing",
      Desctipion:
        "Increase Krypton Exchange value by hyping it on social media",
      AmountBought: 0,
      BasePrice: 500,
      PriceIncrement: 1.75,
      ValueIncrement: 2,
      Modifies: { 1: { KryptonExchangeValue: "add", value: 0.0001 } },
    },
  ],
};

export function MineAlphaCoin(state: any, dispatch: any) {
  dispatch({ type: "add-miner", payload: { id: 1 } });
}

export const AlphaCoinValues = {
  id: 1,
  Name: "Alpha Coin",
  Amount: 0,
  Description: "Your first alt-coin!",
  KryptonExchangeValue: 0.0001,
  CashExchangeValue: 0.01,
  StartAmount: 0,
  Upgrades: [
    {
      Name: "Mining efficiency",
      Description: "Reduce time to mine 1 coin",
      AmountBought: 0,
      Value: 1,
      ValueIncrement: 1,
      BasePrice: 100,
      PriceIncrement: 1.25,
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
      Modifies: { AlphaCoin: { KryptonExchangeValue: "add", value: 0.0001 } },
    },
  ],
};

export function MineAlphaCoin() {}

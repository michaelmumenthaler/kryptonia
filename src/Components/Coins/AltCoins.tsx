import { AlphaCoinValues } from "./Alpha";

export function InitializeAltCoins() {
  const allAltCoins = [];
  // Add all altCoins to the array for initial load
  allAltCoins.push(AlphaCoinValues);
  return allAltCoins;
}

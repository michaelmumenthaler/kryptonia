import { Coin, ICoin } from "./Coin";

export interface IAlphaCoin extends ICoin {}

export default function AlphaCoin(props: IAlphaCoin) {
  props.multiplier = 1;
  console.log(props.multiplier);
}

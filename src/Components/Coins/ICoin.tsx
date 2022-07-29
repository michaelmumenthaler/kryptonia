export default interface ICoin {
  id: number;
  properties: any;
  values: any;
  upgrades: any[] | undefined;
  unlocked: boolean;
}

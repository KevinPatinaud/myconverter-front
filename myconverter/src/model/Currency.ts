import { FlagComponent } from "country-flag-icons/react/3x2";

export interface Currency {
  symbol: string;
  name: string;
  country: string;
  flag: FlagComponent;
  rateUSD: number | undefined;
}

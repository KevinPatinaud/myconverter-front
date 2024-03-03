import HttpService from "../HttpService/Http.service";
import { Currency } from "../../model/Currency";
import Currencies from "../../locales/Currencies";

// renvois les taux des devises demandées par rapport au cours en dollar
const getRates = async () => {
  const httpResponse = await HttpService.get(
    "http://localhost:8080/api/v1/currency/rates"
    //    "https://openexchangerates.org/api/latest.json?app_id=7dd0e0f0dec74fd6ab589afbbd9a8b2e&prettyprint=true&show_alternative=true"
  );

  const currenciesRatedes = [...Currencies];

  currenciesRatedes.forEach((currency: Currency) => {
    httpResponse.data.forEach((currencyApi: any) => {
      if (currency.symbol.toUpperCase() === currencyApi.symbol.toUpperCase()) {
        currency.rateUSD = currencyApi.usdRate;
      }
    });
  });

  return currenciesRatedes;
};

const CurrencyService = {
  getRates,
};

export default CurrencyService;

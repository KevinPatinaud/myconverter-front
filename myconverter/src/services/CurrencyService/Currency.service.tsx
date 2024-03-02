import HttpService from "../HttpService/Http.service";
import { Currency } from "../../model/Currency";
import Currencies from "../../locales/Currencies";

// renvois les taux des devises demandées par rapport au cours en dollar
const getRates = async () => {
  const httpResponse = await HttpService.get(
    "https://openexchangerates.org/api/latest.json?app_id=7dd0e0f0dec74fd6ab589afbbd9a8b2e&prettyprint=true&show_alternative=true"
  );

  const currenciesRatedes = [...Currencies];

  currenciesRatedes.forEach((currency: Currency) => {
    Object.keys(httpResponse.data.rates).forEach((key) => {
      if (key.toUpperCase() === currency.symbol.toUpperCase()) {
        currency.rateUSD = +httpResponse.data.rates[key];
      }
    });
  });

  console.log(currenciesRatedes);

  return currenciesRatedes;
};

const CurrencyService = {
  getRates,
};

export default CurrencyService;

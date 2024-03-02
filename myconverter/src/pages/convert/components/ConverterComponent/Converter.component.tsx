import { FC, useEffect, useState } from "react";
import { Currency } from "../../../../model/Currency";
import CurrencySelector from "../CurrencySelectorComponent/CurrencySelector.component";
import styles from "./Converter.module.css";
import InputCurrencyAmount from "../InputCurrencyAmountComponent/InputCurrencyAmount.component";
import DisplayCurrencyAmount from "../DisplayCurrencyAmountComponent/DisplayCurrencyAmount.component";
import CurrencyService from "../../../../services/CurrencyService/Currency.service";
import Currencies from "../../../../locales/Currencies";
import { SlRefresh } from "react-icons/sl";

const Converter: FC = () => {
  const [amountSource, setAmountSource] = useState(0);
  const [currencySource, setCurrencySource] = useState(
    undefined as unknown as Currency
  );
  const [amountTarget, setAmountTarget] = useState(0);
  const [currencyTargeted, setCurrencyTargeted] = useState(
    undefined as unknown as Currency
  );

  const [currenciesRatedes, setCurrenciesRatedes] = useState([] as Currency[]);

  useEffect(() => {
    const updateRates = async () => {
      setCurrenciesRatedes(await CurrencyService.getRates());
    };
    updateRates();
  }, []);

  useEffect(() => {
    if (
      amountSource === null ||
      amountSource === undefined ||
      currencySource === null ||
      currencySource === undefined ||
      currencyTargeted === null ||
      currencyTargeted === undefined
    ) {
      setAmountTarget(0);
      return;
    }

    const rateSource = currenciesRatedes.find(
      (currency: Currency) => currency.symbol === currencySource.symbol
    )?.rateUSD;

    const rateTargeted = currenciesRatedes.find(
      (currency: Currency) => currency.symbol === currencyTargeted.symbol
    )?.rateUSD;

    setAmountTarget(
      +(
        amountSource *
        ((rateTargeted ? rateTargeted : 1) / (rateSource ? rateSource : 1))
      ).toFixed(2)
    );
  }, [amountSource, currencySource, currencyTargeted]);

  return (
    <>
      <div className={[styles.divPrimary, styles.currencySource].join(" ")}>
        <p className={styles.primaryText}>
          Selectionnez la devise que vous souhaitez convertir
        </p>
      </div>
      <div className={styles.divPrimary}>
        <InputCurrencyAmount
          onChange={(amountSource: number) => {
            setAmountSource(amountSource);
          }}
        />
        <CurrencySelector
          currencySelected={currencySource}
          onCurrencyChange={(currency: Currency) => {
            setCurrencySource(currency);
          }}
        />
      </div>
      <div className={[styles.divPrimary, styles.switch].join(" ")}>
        {currencySource && currencyTargeted && (
          <div
            className={styles.switchBtn}
            onClick={() => {
              setCurrencySource(currencyTargeted);
              setCurrencyTargeted(currencySource);
            }}
          >
            <SlRefresh />
          </div>
        )}
      </div>
      <div className={styles.currencyTargeted}>
        <div className={styles.divPrimary}>
          <p className={styles.primaryText}>
            Selectionnez la devise que vous souhaitez obtenir
          </p>
        </div>
        <div className={styles.divPrimary}>
          <DisplayCurrencyAmount amount={amountTarget} />
          <CurrencySelector
            currencySelected={currencyTargeted}
            onCurrencyChange={(currency: Currency) => {
              setCurrencyTargeted(currency);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Converter;

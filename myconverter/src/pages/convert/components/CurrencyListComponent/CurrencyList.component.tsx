import { FC } from "react";
import Currencies from "../../../../locales/Currencies";
import styles from "./CurrencyList.module.css";
import { Currency } from "../../../../model/Currency";

const CurrencyList: FC<{
  filter: string;
  onCurrencySelected: (currency: Currency) => void;
}> = ({ filter, onCurrencySelected }) => {
  const currencyToisplay = Currencies.filter((currency) =>
    filterLigne(currency, filter)
  );

  return (
    <>
      {currencyToisplay.length > 0 && (
        <div className={styles.areaPrimary}>
          {currencyToisplay.map((currency) => (
            <div
              className={styles.line}
              onClick={() => {
                onCurrencySelected(currency);
              }}
            >
              {currency.flag({ height: 30, width: 30 })}
              <div className={styles.lineText}>
                {formatCurrencyNameToDisplayLine(currency)}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

const formatCurrencyNameToDisplayLine = (currency: Currency) => {
  if (currency === undefined) return <></>;
  else
    return (
      <>
        <p className={styles.primaryLine}>
          {currency?.symbol + " - " + currency?.name}
        </p>
        <p className={styles.secondLine}>{currency.country}</p>
      </>
    );
};

const filterLigne = (currency: Currency, filter: string) => {
  const normalizeString = (s: string) => {
    return s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toUpperCase();
  };

  return (
    normalizeString(currency.country).includes(normalizeString(filter)) ||
    normalizeString(currency.name).includes(normalizeString(filter)) ||
    normalizeString(currency.symbol).includes(normalizeString(filter))
  );
};

export default CurrencyList;

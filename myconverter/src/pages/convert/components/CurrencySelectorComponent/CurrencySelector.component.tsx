import { FC, useEffect, useState } from "react";
import styles from "./CurrencySelector.module.css";
import CurrencyList from "../CurrencyListComponent/CurrencyList.component";
import { Currency } from "../../../../model/Currency";

const CurrencySelector: FC<{
  currencySelected: Currency;
  onCurrencyChange: (currency: Currency) => void;
}> = ({ currencySelected, onCurrencyChange }) => {
  const [displayCurrencyMenu, setDisplayCurrencyMenu] = useState(false);
  const [textInput, setTextInput] = useState(
    formatCurrencyNameToDisplayInput(currencySelected)
  );
  const [closeIfClick, setCloseIfClick] = useState(false);
  const [currencySelectedIsValide, setCurrencySelectedIsValide] = useState(
    currencySelected !== undefined
  );

  useEffect(() => {
    setTextInput(formatCurrencyNameToDisplayInput(currencySelected));
  }, [currencySelected]);

  useEffect(() => {
    document.addEventListener("click", function (event) {
      setDisplayCurrencyMenu(closeIfClick ? true : false);
    });
  }, [closeIfClick]);

  return (
    <div
      onMouseEnter={() => setCloseIfClick(true)}
      onMouseLeave={() => setCloseIfClick(false)}
    >
      <input
        className={[
          "selectPrimary",
          styles.currencySelector,
          currencySelectedIsValide
            ? styles.currencySelectedIsValide
            : styles.currencySelectedIsNotValide,
        ].join(" ")}
        placeholder="Séléctionnez une devise"
        onFocus={() => {
          setDisplayCurrencyMenu(true);
        }}
        onChange={(e) => {
          if (currencySelectedIsValide) {
            setTextInput("");
            onCurrencyChange(undefined as unknown as Currency);
          } else {
            setTextInput(e.target.value);
          }
          setCurrencySelectedIsValide(false);
        }}
        value={textInput}
      />
      {currencySelectedIsValide &&
        currencySelected &&
        currencySelected.flag({
          width: 40,
          height: 40,
          style: { position: "absolute", marginLeft: -60, marginTop: 2 },
        })}
      {displayCurrencyMenu && (
        <CurrencyList
          filter={textInput}
          onCurrencySelected={(currency: Currency) => {
            setTextInput(formatCurrencyNameToDisplayInput(currency));
            onCurrencyChange(currency);
            setCurrencySelectedIsValide(true);
            setDisplayCurrencyMenu(false);
            setCloseIfClick(true);
          }}
        />
      )}
    </div>
  );
};

const formatCurrencyNameToDisplayInput = (currency: Currency) => {
  if (currency === undefined) return "";
  else return currency?.symbol + " - " + currency?.name;
};

export default CurrencySelector;

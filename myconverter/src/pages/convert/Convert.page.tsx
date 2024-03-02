import { FC, useState } from "react";
import CurrencySelector from "./components/CurrencySelectorComponent/CurrencySelector.component";
import { Currency } from "../../model/Currency";
import Converter from "./components/ConverterComponent/Converter.component";

const Convert: FC = () => {
  return (
    <>
      <p className="pageTitle">my Converter</p>
      <Converter />
    </>
  );
};

export default Convert;

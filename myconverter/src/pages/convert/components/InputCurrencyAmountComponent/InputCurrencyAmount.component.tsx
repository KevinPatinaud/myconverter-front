import { FC, useState } from "react";
import styles from "./InputCurrencyAmount.module.css";

const InputCurrencyAmount: FC<{ onChange: (value: number) => void }> = ({
  onChange,
}) => {
  const [value, setValue] = useState("");

  return (
    <>
      <input
        type="text"
        className={[styles.inputCurrency, "selectPrimary"].join(" ")}
        onChange={(e) => {
          if (
            !isNaN(Number(e.target.value)) && e.target.value.includes(".")
              ? e.target.value.split(".")[1].length <= 2
              : true
          ) {
            setValue(e.target.value);
            onChange(+e.target.value);
          }
        }}
        value={value}
      ></input>
    </>
  );
};

export default InputCurrencyAmount;

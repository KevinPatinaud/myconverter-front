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
        maxLength={9}
        className={[styles.inputCurrency, "selectPrimary"].join(" ")}
        onChange={(e) => {
          const inputValue = e.target.value.replace(" ", "");
          if (
            !isNaN(+inputValue) &&
            +inputValue > 0 &&
            (!inputValue.includes(".") ||
              (inputValue.includes(".") &&
                inputValue.split(".")[1].length <= 2))
          ) {
            console.log("update");
            setValue(inputValue);
            onChange(+inputValue);
          }
        }}
        value={value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
      ></input>
    </>
  );
};

export default InputCurrencyAmount;

import { FC } from "react";
import styles from "./DisplayCurrencyAmount.module.css";

const DisplayCurrencyAmount: FC<{ amount: number }> = ({ amount }) => {
  return (
    <>
      <div className={styles.displayCurrency}>
        {amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
      </div>
    </>
  );
};

export default DisplayCurrencyAmount;

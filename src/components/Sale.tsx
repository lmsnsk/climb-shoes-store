import { FC } from "react";

import style from "./Sale.module.scss";

const Sale: FC = () => {
  return (
    <div className={style.sale}>
      <p>Discounts up to 35%! Hurry up to order our equipment</p>
    </div>
  );
};

export default Sale;

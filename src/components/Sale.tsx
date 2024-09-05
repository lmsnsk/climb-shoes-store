import { FC } from "react";

import style from "./Sale.module.scss";

const Sale: FC = () => {
  return (
    <div className={style.sale}>
      <p>Скидки до 35%! Успевай заказать наше снаряжение</p>
    </div>
  );
};

export default Sale;

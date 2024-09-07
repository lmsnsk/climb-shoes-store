import { FC } from "react";

import style from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={style.main}>
      <div>FOLLOW US :</div>
      <div>@2024 | ClimbCity | ALL RIGHTS RESERVED</div>
    </footer>
  );
};

export default Footer;

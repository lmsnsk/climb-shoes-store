import { FC } from "react";

import telegram from "../assets/img/telegram.png";
import instagram from "../assets/img/instagram.png";
import vk from "../assets/img/vk.png";

import style from "./Footer.module.scss";

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
  return (
    <footer className={style.main}>
      <div className={style.contacts}>
        <p>FOLLOW US :</p>
        <img src={vk} alt="vk" />
        <img src={instagram} alt="instagram" />
        <img src={telegram} alt="telegram" />
      </div>
      <div>@2024 | ClimbCity | ALL RIGHTS RESERVED</div>
    </footer>
  );
};

export default Footer;

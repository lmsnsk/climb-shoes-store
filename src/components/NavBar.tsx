import { FC, memo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

import style from "./NavBar.module.scss";

import { setAuth } from "../redux/productsSlice";
import { logoutRequest } from "../utils/requests";
import logo from "../assets/img/TG.png";
import cartImg from "../assets/img/cart.svg";
import logoutImg from "../assets/img/logout.svg";
import ordersImg from "../assets/img/order.svg";
import Categories from "./Categories";

const NavBar: FC = () => {
  const { cartCounter, auth } = useAppSelector((state) => state.products);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogoutHandler = async () => {
    const response = await logoutRequest("logout");
    if (response?.ok) {
      dispatch(setAuth(null));
      navigate("/");
    } else {
      console.error("Bad server response");
    }
  };

  return (
    <header className={style.header}>
      <div className={style.boxLeft}>
        <div className={style.fill}></div>
      </div>
      <Link to="/main">
        <img className={style.logo} src={logo} alt="" />
      </Link>
      <div className={style.navLinks}>
        <Link to="/main">
          <div>Main</div>
        </Link>
        <Categories />
        <Link to="/about-us">
          <div>About us</div>
        </Link>
        <Link to="/contacts">
          <div>Contacts</div>
        </Link>
      </div>
      <div className={style.profileLinks}>
        {auth?.id ? (
          <>
            <Link to="/my-orders">
              <img className={style.icon} src={ordersImg} alt="" />
            </Link>
            <div className={style.cartLink}>
              <Link to="/cart">
                <img className={style.icon} src={cartImg} alt="" />
                {cartCounter ? <div className={style.cartCounter}>{cartCounter}</div> : null}
              </Link>
            </div>
            <div className={style.logout} onClick={onLogoutHandler}>
              <img className={style.icon} src={logoutImg} alt="" />
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <div className={style.divider}></div>
            <Link to="/signup">SignUp</Link>
          </>
        )}
      </div>
      <div className={style.boxRight}>
        <div className={style.fillRight}></div>
      </div>
    </header>
  );
};

export default memo(NavBar);

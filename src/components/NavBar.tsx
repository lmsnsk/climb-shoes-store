import { FC, memo } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { Link, useNavigate } from "react-router-dom";

import style from "./NavBar.module.scss";

import { setAuth } from "../redux/productsSlice";
import { logoutRequest } from "../utils/requests";
import logo from "../assets/img/climbing-shoes64.png";
import cartImg from "../assets/img/cart.svg";
import logoutImg from "../assets/img/logout.svg";
import ordersImg from "../assets/img/order.svg";

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
      <Link to="/products">
        <img className={style.logo} src={logo} alt="" />
        <h4>ClimbCity</h4>
      </Link>
      <div className={style.links}>
        {auth?.id ? (
          <>
            <Link to="/my-orders">
              <img className={style.icon} src={ordersImg} alt="" />
            </Link>
            <div className={style.cartLink}>
              <Link to="/cart">
                <img className={style.icon} src={cartImg} alt="" />
                {cartCounter ? (
                  <div className={style.cartCounter}>{cartCounter}</div>
                ) : null}
              </Link>
            </div>
            <div className={style.logout} onClick={onLogoutHandler}>
              <img className={style.icon} src={logoutImg} alt="" />
            </div>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default memo(NavBar);

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

import style from "./App.module.scss";

import NavBar from "./components/NavBar";
import Content from "./pages/Content";
import { setAuth } from "./redux/productsSlice";
import { getAuth } from "./utils/requests";
import preloader from "./assets/img/preloader.gif";
import Sale from "./components/Sale";
import Footer from "./components/Footer";

function App() {
  const [isLoaded, seLoaded] = useState(false);
  const { auth } = useAppSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isLoaded) {
      if (auth) {
        navigate("main");
      } else {
        navigate("login");
      }
    }
  }, [auth, isLoaded, navigate]);

  useEffect(() => {
    const get = async () => {
      const isAuth = await getAuth("session-check");
      dispatch(setAuth(isAuth || null));
      seLoaded(true);
    };
    get();
  }, [dispatch]);

  return (
    <div className={style.app}>
      <div>
        <div className={style.header}>
          <Sale />
          <NavBar />
        </div>
        <Content />
        {!isLoaded && (
          <div className={style.preloaderBox}>
            <img src={preloader} alt="" className={style.preloader} />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;

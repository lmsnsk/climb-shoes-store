import { FC, Fragment, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import style from "./MainPage.module.scss";

import ProductCard from "./ProductCard";
import { getMyCart } from "../utils/requests";
import { fetchProducts, setCart, setCartCounter } from "../redux/productsSlice";
import { ICartElement, ICartElementSever, IProduct } from "../utils/types";
import footerImg from "../assets/img/Filson_2022_SS3_AK_JKolsch_Day1_Hike_2146.webp";
import { Carousel } from "../components/Carousel";

interface IMainPage {
  setProductId: (value: number) => void;
}

const MainPage: FC<IMainPage> = ({ setProductId }) => {
  const { products, categories } = useAppSelector((state) => state.products);
  const auth = useAppSelector((state) => state.products.auth);
  const [localProduct, setLocalProduct] = useState(products);

  const dispatch = useAppDispatch();
  const checkRequestProducts = useRef(false);

  useEffect(() => {
    if (!checkRequestProducts.current) {
      dispatch(fetchProducts());
      checkRequestProducts.current = true;
    }
    setLocalProduct(() => [...products]);
  }, [products, dispatch]);

  useEffect(() => {
    const get = async () => {
      if (auth?.id) {
        const response = await getMyCart(`cart/${auth.id}`);

        if (response?.ok) {
          let cartCounter = 0;
          const cartServer: Array<ICartElementSever> = await response.json();
          const localCart: Array<ICartElement> = cartServer.map((el) => {
            cartCounter += el.count;
            let prod: IProduct = {
              id: 0,
              photo: "",
              price: 0,
              vendor: "",
              title: "",
              size: null,
              category: "",
            };
            products.forEach((el1) => {
              if (el1.id === el.productId) prod = el1;
            });
            return { owner: el.owner, count: el.count, product: { ...prod, size: el.size } };
          });
          dispatch(setCart(localCart));
          dispatch(setCartCounter(cartCounter));
        }
      }
    };
    get();
  }, [auth, products, dispatch]);

  const showCategoryBlock = (category: string) => {
    let counter = 0;
    return (
      <>
        {category !== "All" && (
          <>
            <div className={style.categoryTitle}>{category}</div>
            <div className={style.cardBox}>
              {localProduct.map((el) => {
                if (category === el.category) counter++;
                return (
                  <Fragment key={-el.id}>
                    {category === el.category && counter <= 4 && (
                      <ProductCard el={el} isCart={false} setProductId={setProductId} />
                    )}
                  </Fragment>
                );
              })}
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <div className={style.main}>
      <Carousel />
      {categories.map((category) => (
        <Fragment key={category}>{showCategoryBlock(category)}</Fragment>
      ))}
      <div className={style.image}>
        <img src={footerImg} alt="footer img" />
      </div>
    </div>
  );
};

export default MainPage;

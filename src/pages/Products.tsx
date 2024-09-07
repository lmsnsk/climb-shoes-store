import { FC, Fragment, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import style from "./Products.module.scss";

import ProductManager from "../components/ProductManager";
import ProductCard from "./ProductCard";
import { getMyCart } from "../utils/requests";
import {
  fetchProducts,
  setCart,
  setCartCounter,
  setProducts,
} from "../redux/productsSlice";
import { ICartElement, ICartElementSever, IProduct } from "../utils/types";

interface IProductsProps {
  setProductId: (value: number) => void;
}

const Products: FC<IProductsProps> = ({ setProductId }) => {
  const products = useAppSelector((state) => state.products.products);
  const auth = useAppSelector((state) => state.products.auth);
  const [localProduct, setLocalProduct] = useState(products);

  const dispatch = useAppDispatch();
  const checkRequestProducts = useRef(false);

  useEffect(() => {
    if (!checkRequestProducts.current) {
      dispatch(fetchProducts());
      setLocalProduct(products);
      checkRequestProducts.current = true;
    }
  }, [products]);

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
            };
            products.forEach((el1) => {
              if (el1.id === el.productId) prod = el1;
            });
            return { owner: el.owner, count: el.count, product: prod };
          });
          dispatch(setCart(localCart));
          dispatch(setCartCounter(cartCounter));
        }
      }
    };
    get();
  }, [auth, products, dispatch]);

  return (
    <div className={style.main}>
      <ProductManager
        products={products}
        setLocalProduct={setLocalProduct}
        setProducts={setProducts}
      />
      <div className={style.cardBox}>
        {localProduct.map((el) => (
          <Fragment key={-el.id}>
            <ProductCard el={el} isCart={false} setProductId={setProductId} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default Products;

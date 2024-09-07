import { FC } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import style from "./ProductCard.module.scss";

import AddToCartButton from "../components/AddToCartButton";
import { IProduct } from "../utils/types";
import { removeFromCart } from "../utils/requests";
import { removeFromLocalCart, setCartCounter } from "../redux/productsSlice";

interface IProductCard {
  el: IProduct;
  isCart: boolean;
  count?: number;
  setProductId: (val: number) => void;
}

const ProductCard: FC<IProductCard> = ({ el, isCart, count, setProductId }) => {
  const { auth, cartCounter, cart } = useAppSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickRemoveProduct = async (product: IProduct) => {
    if (auth?.id) {
      const response = await removeFromCart(`cart`, {
        id: product.id,
        owner: auth?.id,
      });
      if (response?.ok) {
        let currentCount = 0;
        cart.forEach((el) => {
          if (el.owner === auth.id && el.product.id === product.id)
            currentCount = el.count;
        });
        dispatch(removeFromLocalCart(product.id));
        dispatch(setCartCounter(cartCounter - currentCount));
      }
    }
  };

  const onProductInfoHandler = (id: number) => {
    setProductId(id);
    navigate(isCart ? `../products/${id.toString()}` : id.toString());
  };

  return (
    <div>
      <div
        className={style.productCard}
        onClick={() => onProductInfoHandler(el.id)}
      >
        <img src={el.photo} alt="" />
        <div className={style.title}>{el.title}</div>
        <div className={style.vendor}>{el.vendor}</div>
        <div className={style.price}>{el.price} &euro;</div>
      </div>
      {isCart ? (
        <>
          <div className={style.buttons}>
            <AddToCartButton el={el} title="-" style={style.plusminus} />
            <div className={style.counter}>{count}</div>
            <AddToCartButton el={el} title="+" style={style.plusminus} />
          </div>
          <button onClick={() => onClickRemoveProduct(el)}>Remove</button>
        </>
      ) : (
        <AddToCartButton el={el} title="Add to cart" />
      )}
    </div>
  );
};

export default ProductCard;

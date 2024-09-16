import { FC } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { ICartElement, IProduct } from "../utils/types";
import { setCart, setCartCounter } from "../redux/productsSlice";
import { addToMyCart, updateMyCart } from "../utils/requests";

interface IAddToCartButton {
  el: IProduct;
  btnTitle: string;
  isSizeNeed?: boolean;
  style?: string;
}

const AddToCartButton: FC<IAddToCartButton> = ({ el, btnTitle, style }) => {
  const { cart, auth } = useAppSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickAddToCartHandler = (product: IProduct) => {
    if (!auth?.id) {
      navigate("/login");
      return;
    }
    if (el.isSizeNeed && !el.size) return;

    let cartCounter = 0;
    let isOneCount = false;

    if (cart.length) {
      let count = 1;
      let check = false;
      const newCart: Array<ICartElement> = cart.map((cartEl) => {
        cartCounter += cartEl.count;
        if (cartEl.product.id === product.id && cartEl.product.size === product.size) {
          if (cartEl.count === 1 && btnTitle === "-" && cartCounter !== cart.length) {
            isOneCount = true;
          }
          check = true;
          count = btnTitle !== "-" ? cartEl.count + 1 : cartEl.count > 1 ? cartEl.count - 1 : 1;
          return {
            product: cartEl.product,
            owner: cartEl.owner,
            count: btnTitle !== "-" ? cartEl.count + 1 : cartEl.count > 1 ? cartEl.count - 1 : 1,
          };
        }
        return cartEl;
      });
      if (check) {
        dispatch(setCart(newCart));
        updateMyCart("cart", { id: product.id, size: product.size, count: count, owner: auth.id });
      } else {
        newCart.push({ product: product, owner: auth.id, count: 1 });
        dispatch(setCart(newCart));
        addToMyCart("cart", {
          productId: product.id,
          size: product.size,
          owner: auth.id,
          count: 1,
        });
      }
    } else {
      dispatch(setCart([{ product: product, owner: auth.id, count: 1 }]));
      addToMyCart("cart", { productId: product.id, size: product.size, owner: auth.id, count: 1 });
    }
    if (!isOneCount) {
      dispatch(
        setCartCounter(
          btnTitle !== "-"
            ? cartCounter + 1
            : cartCounter > cart.length
            ? cartCounter - 1
            : cart.length
        )
      );
    }
  };

  return (
    <button className={style} onClick={() => onClickAddToCartHandler(el)}>
      {btnTitle}
    </button>
  );
};

export default AddToCartButton;

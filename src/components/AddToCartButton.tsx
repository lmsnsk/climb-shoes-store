import { FC } from "react";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import { ICartElement, IProduct } from "../utils/types";
import { setCart, setCartCounter } from "../redux/productsSlice";
import { addToMyCart, updateMyCart } from "../utils/requests";

interface IAddToCartButton {
  el: IProduct;
  title: string;
  style?: string;
}

const AddToCartButton: FC<IAddToCartButton> = ({ el, title, style }) => {
  const { cart, auth } = useAppSelector((state) => state.products);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickAddToCartHandler = (product: IProduct) => {
    if (!auth?.id) {
      navigate("/login");
      return;
    }
    let cartCounter = 0;
    let isOneCount = false;

    if (cart.length) {
      let count = 1;
      let check = false;
      const newCart: Array<ICartElement> = cart.map((el) => {
        cartCounter += el.count;
        if (el.product.id === product.id) {
          if (el.count === 1 && title === "-" && cartCounter !== cart.length)
            isOneCount = true;
          check = true;
          count =
            title !== "-" ? el.count + 1 : el.count > 1 ? el.count - 1 : 1;
          return {
            product: el.product,
            owner: el.owner,
            count:
              title !== "-" ? el.count + 1 : el.count > 1 ? el.count - 1 : 1,
          };
        }
        return el;
      });
      if (check) {
        dispatch(setCart(newCart));
        updateMyCart("cart", { id: product.id, count: count, owner: auth.id });
      } else {
        newCart.push({ product: product, owner: auth.id, count: 1 });
        dispatch(setCart(newCart));
        addToMyCart("cart", {
          productId: product.id,
          owner: auth.id,
          count: 1,
        });
      }
    } else {
      dispatch(setCart([{ product: product, owner: auth.id, count: 1 }]));
      addToMyCart("cart", { productId: product.id, owner: auth.id, count: 1 });
    }
    if (!isOneCount) {
      dispatch(
        setCartCounter(
          title !== "-"
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
      {title}
    </button>
  );
};

export default AddToCartButton;

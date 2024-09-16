import { FC, MouseEvent, useRef, useState } from "react";
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

  const [chosenPhoto, setChosenPhoto] = useState(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onClickRemoveProduct = async (product: IProduct) => {
    if (auth?.id) {
      const response = await removeFromCart(`cart`, {
        id: product.id,
        owner: auth?.id,
        size: product.size,
      });
      if (response?.ok) {
        let currentCount = 0;
        cart.forEach((el) => {
          if (el.owner === auth.id && el.product.id === product.id) currentCount = el.count;
        });
        dispatch(removeFromLocalCart({ id: product.id, size: product.size }));
        dispatch(setCartCounter(cartCounter - currentCount));
      }
    }
  };

  const onProductInfoHandler = (id: number) => {
    setProductId(id);
    navigate(`../products/${id.toString()}`);
  };

  const onMouseEnterHandler = (e: MouseEvent) => {
    const imgWidth = imgRef.current?.getBoundingClientRect().width;
    const imgLeftSide = imgRef.current?.getBoundingClientRect().left;

    if (!imgWidth || !imgLeftSide) return;

    const imageCount = el.photo.split(",").length;
    const number = imageCount - (imgWidth - (e.clientX - imgLeftSide)) / (imgWidth / imageCount);

    if (number !== chosenPhoto) setChosenPhoto(Math.floor(number));
  };

  return (
    <div>
      <div className={style.productCard} onClick={() => onProductInfoHandler(el.id)}>
        <img
          ref={imgRef}
          src={el.photo.split(",")[chosenPhoto]}
          alt=""
          onMouseMove={(e) => onMouseEnterHandler(e)}
          onMouseLeave={() => setChosenPhoto(0)}
        />
        <div className={style.title}>{el.title}</div>
        <div className={style.vendor}>{el.vendor}</div>
        <div className={style.price}>{el.price} &euro;</div>
        {el.size && <div className={style.size}>Size: {el.size}</div>}
      </div>
      {isCart && (
        <>
          <div className={style.buttons}>
            <AddToCartButton el={el} btnTitle="-" style={style.plusminus} />
            <div className={style.counter}>{count}</div>
            <AddToCartButton el={el} btnTitle="+" style={style.plusminus} />
          </div>
          <button onClick={() => onClickRemoveProduct(el)}>Remove</button>
        </>
      )}
    </div>
  );
};

export default ProductCard;

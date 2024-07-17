import { useNavigate } from "react-router";
import { FC, FormEvent, Fragment, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import style from "./Cart.module.scss";

import ProductCard from "./ProductCard";
import { createOrderRequest, removeMyCart } from "../utils/requests";
import { setCart, setCartCounter, setOrder } from "../redux/productsSlice";

interface ICart {
  setProductId: (value: number) => void;
}

const Cart: FC<ICart> = ({ setProductId }) => {
  const { cart, auth } = useAppSelector((state) => state.products);
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [createOrder, setCreateOrder] = useState(false);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let sum = 0;

  const showCart = () => {
    const cartArr = cart.map((el) => {
      sum += el.product.price * el.count;
      return (
        <Fragment key={-el.product.id}>
          <ProductCard
            el={el.product}
            isCart={true}
            count={el.count}
            setProductId={setProductId}
          />
        </Fragment>
      );
    });
    return cartArr;
  };

  const onSubmitHandler = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (auth?.id) {
      const products = cart.map((el) => ({
        product: el.product,
        count: el.count,
      }));
      const response = await createOrderRequest("my-orders", {
        address: address,
        date: date,
        owner: auth.id,
        status: true,
        products: JSON.stringify(products),
        totalPrice: sum,
      });
      if (response?.ok) {
        dispatch(
          setOrder({
            address: address,
            date: date,
            owner: auth.id,
            status: true,
            products: products,
            totalPrice: sum,
          })
        );
        const removeResponse = await removeMyCart(`remove-cart/${auth.id}`);
        if (removeResponse?.ok) {
          dispatch(setCart([]));
          dispatch(setCartCounter(0));
          navigate("../my-orders");
        }
      }
    }
  };

  return (
    <div className={style.main}>
      {cart.length ? (
        <>
          <div className={style.mainTitle}>My cart</div>
          <div className={style.cardBox}>{showCart()}</div>
          <div className={style.btnBox}>
            Total: {sum} &euro;
            <button
              className={style.createOrderBtn}
              onClick={() => setCreateOrder(true)}
            >
              Checkout
            </button>
          </div>
        </>
      ) : (
        <div className={style.empty}>Cart is empty &#129402;</div>
      )}
      {createOrder && (
        <div className={style.background}>
          <div className={style.orderCreator}>
            <div onClick={() => setCreateOrder(false)} className={style.close}>
              <span className={style.one}></span>
              <span className={style.two}></span>
            </div>
            <form onSubmit={(e) => onSubmitHandler(e)}>
              <div>
                <p>Delivery address:</p>
                <input
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  type="text"
                  placeholder="Address..."
                  className={style.address}
                  required
                />
              </div>
              <div>
                <p> Delivery date:</p>
                <input
                  type="date"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <button className={style.createOrderBtn} type="submit">
                Create an order
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

import { FC, useEffect, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

import style from "./MyOrders.module.scss";

import { getOrders } from "../utils/requests";
import { setAllOrder } from "../redux/productsSlice";
import { IOrder, IOrderServer, IProduct } from "../utils/types";
import { formatDate } from "../utils/helpers";

const MyOrders: FC = () => {
  const { auth, orders, products } = useAppSelector((state) => state.products);
  const [isHaveOrders, setHaveOrders] = useState(false);
  const [priceSortReversed, setPriceSortReversed] = useState(false);
  const [dateSortReversed, setDateSortReversed] = useState(false);
  const [activeSort, setActiveSort] = useState<string>("");

  const checkRequest = useRef(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth?.id) {
      const get = async () => {
        const response = await getOrders(`my-orders/${auth.id}`);

        if (response?.ok) {
          const data: Array<IOrderServer> = await response.json();

          const ordersArr: Array<IOrder> = data.map((order) => {
            const arr = JSON.parse(order.products).map(
              (el: { product: IProduct; count: number }) => {
                let product: IProduct = {
                  id: 0,
                  title: "",
                  photo: "",
                  vendor: "",
                  price: 100,
                  size: null,
                  category: "",
                };
                products.forEach((productElement) => {
                  if (productElement.id === +el.product.id) product = productElement;
                });
                return { product: { ...product, size: el.product.size }, count: el.count };
              }
            );
            return {
              totalPrice: order.totalPrice,
              id: order.id,
              owner: order.owner,
              address: order.address,
              date: order.date,
              status: order.status,
              products: arr,
              createdAt: formatDate(order.createdAt),
            };
          });
          dispatch(setAllOrder(ordersArr));
          if (ordersArr.length) setHaveOrders(true);
        }
      };
      if (!checkRequest.current) {
        get();
        checkRequest.current = true;
      }
    }
  }, [auth, products, dispatch]);

  const onClickPriceSort = () => {
    const sortArr = orders.map((el) => ({ ...el }));
    sortArr.sort((a, b) => a.totalPrice - b.totalPrice);
    if (priceSortReversed) {
      sortArr.reverse();
      setPriceSortReversed(false);
    } else {
      setPriceSortReversed(true);
    }
    dispatch(setAllOrder(sortArr));
    setActiveSort("price");
  };

  const onClickDateSort = () => {
    const sortArr = orders.map((el) => ({ ...el }));
    sortArr.sort((a, b) => {
      if (a.createdAt && b.createdAt) return a.createdAt.localeCompare(b.createdAt);
      return a.totalPrice - b.totalPrice;
    });
    if (dateSortReversed) {
      sortArr.reverse();
      setDateSortReversed(false);
    } else {
      setDateSortReversed(true);
    }
    dispatch(setAllOrder(sortArr));
    setActiveSort("date");
  };

  const sortPriceStyle = activeSort === "price" ? style.activeSort : style.sort;
  const sortNameStyle = activeSort === "date" ? style.activeSort : style.sort;

  return (
    <div className={style.main}>
      {isHaveOrders ? (
        <>
          <div className={style.mainTitle}>My orders</div>
          <div className={style.sortBox}>
            Sort by
            <span onClick={onClickPriceSort} className={sortPriceStyle}>
              price
            </span>
            <span onClick={onClickDateSort} className={sortNameStyle}>
              date
            </span>
          </div>
          {orders.map((el, index) => {
            return (
              <div className={style.orderBox} key={index}>
                <div className={style.productsBox}>
                  {el.products.map((el1, index) => {
                    return (
                      <div key={index}>
                        <div className={style.title}>{el1.product.title}</div>
                        <div className={style.price}>{el1.product.price} &euro;</div>
                        <div className={style.price}>size: {el1.product.size}</div>
                        <div className={style.price}>count: {el1.count}</div>
                        <img src={el1.product.photo} alt="" />
                      </div>
                    );
                  })}
                </div>
                <div className={style.deliveryBox}>
                  <div className={style.delivery}>
                    Total price: <strong>{el.totalPrice} &euro;</strong>
                  </div>
                  <div className={style.delivery}>
                    Delivery address: <strong>{el.address}</strong>
                  </div>
                  <div className={style.delivery}>
                    Delivery date: <strong>{el.date}</strong>
                  </div>
                  <div className={style.delivery}>
                    Created: <strong>{el.createdAt}</strong>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <div className={style.noOrders}>You have not orders yet &#129402;</div>
      )}
    </div>
  );
};

export default MyOrders;

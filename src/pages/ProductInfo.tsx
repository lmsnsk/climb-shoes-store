import { FC, useEffect, useRef } from "react";

import style from "./ProductInfo.module.scss";

import AddToCartButton from "../components/AddToCartButton";
import { fetchProductById } from "../redux/productsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface IProductInfo {
  productId: number;
}

const ProductInfo: FC<IProductInfo> = ({ productId }) => {
  const product = useAppSelector((state) => state.products.product);
  const checkRequest = useRef(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!checkRequest.current) {
      dispatch(fetchProductById(productId));
      checkRequest.current = true;
    }
  }, [productId, dispatch]);

  return (
    <div className={style.main}>
      <img src={product?.photo} alt="" />
      <div>
        <div className={style.title}>{product?.title}</div>
        <div className={style.price}>{product?.price} &euro;</div>
        <div className={style.description}>{product?.description}</div>
        <div className={style.sizesBox}>
          {product?.sizes?.split(",").map((el) => (
            <div className={style.size}>{el.replace(".", ",")}</div>
          ))}
        </div>
        <div className={style.vendor}>{product?.vendor}</div>
        <a href={product?.vendorInfo} rel="noreferrer" target="_blank">
          <div className={style.vendorInfo}>{product?.vendorInfo}</div>
        </a>
        <div className={style.btnBox}>
          {product && (
            <AddToCartButton
              el={{
                id: product.id,
                title: product.title,
                photo: product.photo,
                vendor: product.vendor,
                price: product.price,
              }}
              title="Add to cart"
            />
          )}
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;

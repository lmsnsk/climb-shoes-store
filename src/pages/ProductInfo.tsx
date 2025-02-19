import { FC, useEffect, useRef, useState } from "react";

import style from "./ProductInfo.module.scss";

import AddToCartButton from "../components/AddToCartButton";
import { fetchProductById } from "../redux/productsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import backImg from "../assets/img/back.png";

interface IProductInfo {
  productId: number;
}

const ProductInfo: FC<IProductInfo> = ({ productId }) => {
  const { product, isProductLoading } = useAppSelector((state) => state.products);
  const [chosenPhoto, setChosenPhoto] = useState(0);

  const checkRequest = useRef(false);

  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!checkRequest.current) {
      dispatch(fetchProductById(productId));
      checkRequest.current = true;
    }
  }, [productId, dispatch]);

  const photoArr = product?.photo ? product.photo.split(",") : [];

  const showSizes = () => {
    return (
      <div className={style.sizesBox}>
        {product?.sizes.split(",").map((el) => (
          <div
            key={el}
            className={selectedSize === +el ? `${style.size} ${style.activeSize}` : `${style.size}`}
            onClick={() => setSelectedSize(+el)}
          >
            {el.replace(".", ",")}
          </div>
        ))}
      </div>
    );
  };

  if (isProductLoading) return <></>;

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <img
        className={style.buttonBack}
        src={backImg}
        alt=""
        onClick={() => window.history.back()}
      />
      <div className={style.main}>
        <div className={style.imgBox}>
          <img src={photoArr[chosenPhoto]} alt="product-photo" />
          <div className={style.miniPhotos}>
            {photoArr.map((el, index) => (
              <img
                className={index === chosenPhoto ? style.chosenPhoto : ""}
                src={el}
                alt="product-miniphoto"
                key={el}
                onClick={() => setChosenPhoto(index)}
              />
            ))}
          </div>
        </div>
        <div>
          <div className={style.title}>{product?.title}</div>
          <div className={style.price}>{product?.price} &euro;</div>
          <div className={style.description}>{product?.description}</div>
          {product?.sizes && showSizes()}
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
                  category: product.category,
                  price: product.price,
                  size: selectedSize,
                  isSizeNeed: product.sizes ? true : false,
                }}
                btnTitle="Add to cart"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductInfo;

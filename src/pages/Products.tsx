import { FC, Fragment, useState } from "react";
import { useAppSelector } from "../redux/hooks";

import style from "./Products.module.scss";

import ProductManager from "../components/ProductManager";
import ProductCard from "./ProductCard";
import { setProducts } from "../redux/productsSlice";
import footerImg from "../assets/img/Filson_2022_SS3_AK_JKolsch_Day1_Hike_2146.webp";

interface IProductsProps {
  setProductId: (value: number) => void;
}

const Products: FC<IProductsProps> = ({ setProductId }) => {
  const { products, currentCategory } = useAppSelector((state) => state.products);
  const [localProduct, setLocalProduct] = useState(products);

  return (
    <div className={style.main}>
      <ProductManager
        products={products}
        setLocalProduct={setLocalProduct}
        setProducts={setProducts}
      />
      {currentCategory !== "All" && <div className={style.categoryTitle}>{currentCategory}</div>}
      <div className={style.cardBox}>
        {localProduct.map((el) => {
          if (currentCategory === el.category || currentCategory === "All") {
            return (
              <Fragment key={-el.id}>
                <ProductCard el={el} isCart={false} setProductId={setProductId} />
              </Fragment>
            );
          }
          return <Fragment key={-el.id}></Fragment>;
        })}
      </div>
    </div>
  );
};

export default Products;

import { FC, useEffect, useState } from "react";
import { Action } from "@reduxjs/toolkit";

import style from "./ProductManager.module.scss";

import { useDebounce } from "../utils/hooks";
import { IProduct } from "../utils/types";
import { useAppDispatch } from "../redux/hooks";

interface IProductManager {
  products: IProduct[] | [];
  setLocalProduct: (value: IProduct[] | []) => void;
  setProducts: (value: IProduct[] | []) => Action;
}

const ProductManager: FC<IProductManager> = ({
  products,
  setLocalProduct,
  setProducts,
}) => {
  const [searchInput, setSearchInput] = useState<string>("");
  const [priceSortReversed, setPriceSortReversed] = useState<boolean>(false);
  const [nameSortReversed, setNameSortReversed] = useState<boolean>(false);
  const [activeSort, setActiveSort] = useState<string>("");

  const debouncedSearchInput = useDebounce(searchInput, 200);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const result = products.filter((el) =>
      el.title.toLowerCase().includes(debouncedSearchInput.toLowerCase())
    );
    setLocalProduct(result);
  }, [debouncedSearchInput, products, setLocalProduct]);

  const onClickPriceSort = () => {
    const sortArr = products.map((el) => ({ ...el }));
    sortArr.sort((a, b) => a.price - b.price);
    if (priceSortReversed) {
      sortArr.reverse();
      setPriceSortReversed(false);
    } else {
      setPriceSortReversed(true);
    }
    dispatch(setProducts(sortArr));
    setActiveSort("price");
  };

  const onClickNameSort = () => {
    const sortArr = products.map((el) => ({ ...el }));
    sortArr.sort((a, b) => a.title.localeCompare(b.title));
    if (nameSortReversed) {
      sortArr.reverse();
      setNameSortReversed(false);
    } else {
      setNameSortReversed(true);
    }
    dispatch(setProducts(sortArr));
    setActiveSort("name");
  };

  const sortPriceStyle = activeSort === "price" ? style.activeSort : style.sort;
  const sortNameStyle = activeSort === "name" ? style.activeSort : style.sort;

  return (
    <div className={style.cardMangement}>
      <input
        placeholder="Search..."
        value={searchInput}
        className={style.search}
        onChange={(e) => setSearchInput(e.target.value)}
        type="text"
      />
      <div className={style.sortBox}>
        Sort by
        <span onClick={onClickPriceSort} className={sortPriceStyle}>
          price
        </span>
        <span onClick={onClickNameSort} className={sortNameStyle}>
          name
        </span>
      </div>
    </div>
  );
};

export default ProductManager;

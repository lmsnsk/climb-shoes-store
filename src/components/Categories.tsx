import { FC, useState } from "react";

import style from "./Categories.module.scss";
import { useNavigate } from "react-router";
import { setCurrentCategory } from "../redux/productsSlice";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

interface CategoriesProps {}

const Categories: FC<CategoriesProps> = () => {
  const categories = useAppSelector((state) => state.products.categories);

  const [isCategoriesOpened, setIsCategoriesOpened] = useState(false);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onCategoryClickHandler = (category: string) => {
    setIsCategoriesOpened(false);
    dispatch(setCurrentCategory(category));
    navigate("/products");
  };

  const showCategories = () => {
    return (
      <>
        {categories.map((category, index) => (
          <div
            className={style.dropItem}
            key={category + index}
            onClick={() => onCategoryClickHandler(category)}
          >
            {category}
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={style.categoriesSelect} onMouseLeave={() => setIsCategoriesOpened(false)}>
        <div className={style.dropTitle} onMouseEnter={() => setIsCategoriesOpened(true)}>
          Categories
        </div>
        <div className={style.dropArrow}></div>
        {isCategoriesOpened && <div className={style.dropList}>{showCategories()}</div>}
      </div>
    </>
  );
};

export default Categories;

import { FC, useState } from "react";

import style from "./Categories.module.scss";

interface CategoriesProps {}

const categories = ["All", "Climbing shoes", "Ropes", "Chalk"];

const Categories: FC<CategoriesProps> = () => {
  const [isCategoriesOpened, setIsCategoriesOpened] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const handler = (index: number) => {
    setIsCategoriesOpened(false);
    setCurrentCategory(index + 1);
  };

  const showCategories = () => {
    return (
      <>
        {categories.map((category, index) => (
          <div className={style.dropItem} key={index} onClick={() => handler(index)}>
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

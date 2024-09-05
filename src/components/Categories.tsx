import { FC, useState } from "react";

import style from "./Categories.module.scss";

interface CategoriesProps {}

const categories = ["Все", "Скальные туфли", "Веревки", "Магнезия"];

const Categories: FC<CategoriesProps> = () => {
  const [iscategoriesOpened, setIscategoriesOpened] = useState(false);
  const [currentCategory, setCurrentCategory] = useState(0);

  const handler = (index: number) => {
    setIscategoriesOpened(false);
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
      <div className={style.categoriesLine}>{showCategories()}</div>
      <div className={style.categoriesSelect} onMouseLeave={() => setIscategoriesOpened(false)}>
        <div className={style.dropTitle} onMouseEnter={() => setIscategoriesOpened(true)}>
          Категории
        </div>
        {iscategoriesOpened && <div className={style.dropList}>{showCategories()}</div>}
      </div>
    </>
  );
};

export default Categories;

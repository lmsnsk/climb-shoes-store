import { FC, useState } from "react";

import style from "./Categories.module.scss";

interface CategoriesProps {}

const categories = ["Все", "Скальные туфли", "Веревки", "Магнезия"];

const Categories: FC<CategoriesProps> = () => {
  const [iscategoriesOpened, setIscategoriesOpened] = useState(false);

  const categoriesToogler = () => {
    setIscategoriesOpened(!iscategoriesOpened);
  };

  const showCategories = () => {
    return (
      <>
        {categories.map((category, index) => (
          <div key={index}>{category}</div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className={style.categoriesLine}>{showCategories()}</div>
      <div className={style.categoriesSelect}>
        <div className={style.dropTitle} onClick={categoriesToogler}>
          Категории
        </div>
        {iscategoriesOpened && <div className={style.dropList}>{showCategories()}</div>}
      </div>
    </>
  );
};

export default Categories;

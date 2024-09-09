import { FC, useEffect, useRef, useState } from "react";

import style from "./Carousel.module.scss";

import first from "../assets/img/2022-msr-hubbahubba-cascades-rinckenberger-9136.jpg";
import second from "../assets/img/2023-cascade-summer-backpack-switzerland-patitucci-7642_1.jpg";
import third from "../assets/img/SS24_KEEN_1001938_M_NewportH2_752_1.jpg";
import fourth from "../assets/img/primus_stoves.jpg";

const imgArr = [first, second, third, fourth];

interface CarouselProps {}

export const Carousel: FC<CarouselProps> = () => {
  const [currentImg, setCurrentImg] = useState(0);
  const intervalRef = useRef<NodeJS.Timer>();

  const startInterval = () => {
    intervalRef.current = setInterval(() => {
      setCurrentImg((prev) => (prev + 1) % imgArr.length);
    }, 10000);
  };

  useEffect(() => {
    startInterval();
    return () => clearInterval(intervalRef.current);
  }, []);

  const tooglerHandler = (index: number) => {
    setCurrentImg(index);
    clearInterval(intervalRef.current);
    startInterval();
  };

  return (
    <div className={style.carousel}>
      {imgArr.map((_, index) => (
        <img
          key={index}
          src={imgArr[index]}
          className={index === currentImg ? `${style.img} ${style.ActiveImg}` : style.img}
          alt="img"
        />
      ))}
      <div className={style.toogler}>
        {imgArr.map((_, index) => (
          <div
            className={
              index === currentImg ? `${style.button} ${style.activeButton}` : style.button
            }
            key={index}
            onClick={() => tooglerHandler(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

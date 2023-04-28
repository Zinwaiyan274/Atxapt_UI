import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./ResultForm.css";
import { Pagination, Navigation, Scrollbar } from "swiper";
import Card from "./Card";
import { image_1 } from "..";
import { datas } from "../../datas";

const ResultForm = () => {
  const list = [1, 2, 3,4,5,6];
  return (
    <div className=" w-[1200px] h-screen justify-center items-center mx-auto">
      <div className="w-full mb-5">
        <p className=" text-4xl text-secondary mb-2">Final Matching Home Lists</p>
        <p className=" text-base text-dark w-[565px] ">
          vulputate augue hendrerit in ipsum dolore autem praesent luptatum dolor feugait feugiat
          suscipit nonummy dolore exerci qui sit{" "}
        </p>
      </div>
      <div className="w-full  bg-dark">
        <div className="grid grid-cols-2 gap-2  md:grid-cols-3 max-h-[500px] scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-light overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
          {datas.map((item, index) => {
            if (list.includes(item.id)) {
              return (
                <Card
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  text={item.text}
                  number={item.id}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default ResultForm;

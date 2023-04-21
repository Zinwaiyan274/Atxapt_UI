import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import './ResultForm.css'
import { Pagination,Navigation,Scrollbar } from "swiper";
import Card from "./Card";
import { image_1 } from "..";

const ResultForm = () => {
  const datas = [
    {
      img:image_1,
      title:"Loreum iusmp liderried",
      text:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      img:image_1,
      title:"Loreum iusmp liderried",
      text:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      img:image_1,
      title:"Loreum iusmp liderried",
      text:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      img:image_1,
      title:"Loreum iusmp liderried",
      text:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      img:image_1,
      title:"Loreum iusmp liderried",
      text:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
    {
      img:image_1,
      title:"Loreum iusmp liderried",
      text:"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."
    },
  ]
  return (
    <div className=" w-[1200px] h-[640px] flex flex-col justify-center items-center mx-auto">
      <div className="w-full mb-5">
      <p className=" text-4xl text-secondary mb-2">Final Matching Home Lists</p>
      <p className=" text-base text-dark w-[565px] ">vulputate augue hendrerit in ipsum dolore autem praesent luptatum dolor feugait feugiat suscipit nonummy dolore exerci qui sit </p>
      </div>
      <div className="w-full py-auto px-4  bg-dark">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        scrollbar={{
          hide:true,
        }}
  
        navigation={true}
        modules={[Navigation,Scrollbar]}
        className="mySwiper"
      >
        {
          datas.map((item,index)=>(

            <SwiperSlide><Card img={item.img} title={item.title} text={item.text} /></SwiperSlide>
          ))
        }
      
      </Swiper>
      </div>
    </div>
  );
};

export default ResultForm;

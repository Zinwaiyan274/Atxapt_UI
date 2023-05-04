import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "./ResultForm.css";
import { Pagination, Navigation, Scrollbar } from "swiper";
import Card from "./Card";
import { image_1 } from "..";
import { datas } from "../../datas";
import { useContext } from "react";
import { ResultContext } from "../../contexts/ResultContext";
import { ResultFormContext } from "../../contexts/resultFormContext";

const ResultForm = () => {
  const [isForm, setForm] = useContext(ResultFormContext);
  const list = isForm;
  const listKeys = Object.values(list);
  const listlength = listKeys.length;
  console.log(list);
  return (
    <motion.div initial={{width:0}} animate={{width:'1200px'}} exit={{x:window.innerWidth}} className=" w-[1200px] h-screen justify-center items-center mx-auto">
      <div className="w-full mb-5">
        <p className=" text-4xl text-secondary mb-2">Final Matching Home Lists</p>
        <p className=" text-base text-dark w-[565px] ">
          vulputate augue hendrerit in ipsum dolore autem praesent luptatum dolor feugait feugiat
          suscipit nonummy dolore exerci qui sit{" "}
        </p>
      </div>
      <div className="w-full  bg-dark">
        <motion.div
          layout
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-2 gap-2  md:grid-cols-3 max-h-[500px] scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-light overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        >
          {listKeys.map((key, index) => {
            const id = key;
            const item = datas.find((data) => data.id === id);
            // console.log(key);
            // console.log(item);
            if (item) {
              return (
                <Card key={index} img={item.img} number={index + 1} id={item.id} props={item} />
              );
            } else {
              return null;
            }
          })}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ResultForm;

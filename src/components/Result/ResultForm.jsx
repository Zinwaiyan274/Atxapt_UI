import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import "swiper/css";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "swiper/css/pagination";
import "./ResultForm.css";
import Card from "./Card";
import { datas } from "../../datas";
import { ResultFormContext } from "../../contexts/resultFormContext";
import { FormDataContext } from "../../contexts/FormContext";

const ResultForm = () => {
  const { isForm, loading, handleAPICall } = useContext(ResultFormContext);
  const [formData, setFormData] = useContext(FormDataContext);
  useEffect(() => {
    handleAPICall(formData);
  }, []);

  const list = isForm;
  const listKeys = Object.values(list);

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "1200px" }}
      exit={{ x: window.innerWidth }}
      className="w-full h-screen justify-center items-center md:mx-auto"
    >
      <div className="w-screen mb-5">
        <p className="text-2xl md:text-4xl mt-6 mb-6 md:mb-10 text-secondary font-semibold">
          Final Matching Home Lists
        </p>
        <p className=" text-sm md:text-base text-dark w-[565px] mb-10 md:mb-20 ">
          Our machine-learning algorithm recommends these apartments according to your needs.{" "}
        </p>
      </div>
      <div className="w-screen md:w-full bg-dark">
        {loading ? (
          // Render the Skeleton component if data is still loading
          <div className="grid grid-cols-2 gap-2 w-full mx-2 md:grid-cols-3 h-auto md:h-[700px] scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-light overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
            {Array.from({ length: 9 }).map((_, index) => (
              <Skeleton key={index} height={200} />
            ))}
          </div>
        ) : (
          // Render the content when loading is false
          <motion.div
            layout
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid grid-cols-2 gap-2 w-full mx-2  md:grid-cols-3 h-auto md:h-[700px] scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-light overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
          >
            {listKeys.map((key, index) => {
              const id = key;
              const item = datas.find((data) => data.id === id);
              if (item) {
                return (
                  <Card key={index} img={item.img} number={index + 1} id={item.id} props={item} />
                );
              } else {
                return null;
              }
            })}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ResultForm;

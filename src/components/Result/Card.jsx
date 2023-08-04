import React from "react";
import { image_1, vectorIcon } from "..";
import { useState } from "react";
import { motion } from "framer-motion";
import Modal from "../Modal/Modal";
const Card = ({ img, number, id, props }) => {
  const [showModal, setShowModal] = useState(false);
  function truncate(str, n) {
    return str.length > n ? str.slice(0, 100) + "...." : str;
  }
  // console.log(props)
  return (
    <>
      <motion.div
        layout
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.5 }}
        href="#"
        onClick={(e) => setShowModal(true)}
        className=" relative w-50 md:w-[331px] h-auto mb-5 items-center text-white  transition-all duration-200 border border-gray-200 shadow md:flex-row hover:bg-gray-200 dark:border-gray-700 bg-secondary 
        dark:hover:bg-red-800"
      >
        {number <= 5 ? (
          number == 1 ? (
            <div className="absolute inline-flex items-center justify-center p-2 w-auto h-6 text-xs font-bold text-secondary bg-light border-[0.5px] border-light bg-[#FBC0C0] rounded-full top-2 left-2 ">
              <img src={vectorIcon} alt="" className="object-cover w-4 h-4 me-2" />
              Best For You
            </div>
          ) : (
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-secondary bg-light border-[0.5px] border-light bg-[#FBC0C0] rounded-full top-2 left-2 ">
              {number}
            </div>
          )
        ) : null}

        <img className="object-cover w-full h-auto md:h-[291px] md:w-full " src={img} alt="" />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <a href="#" onClick={() => setShowModal(true)}>
            <h5 className="mb-2 text-base font-bold tracking-tight ">{props.title}</h5>
          </a>
          <p className="mb-3 text-sm text-light dark:text-gray-100">{truncate(props.text, 200)}</p>
        </div>
      </motion.div>
      {showModal ? (
        <Modal show={showModal} index={id} setShow={setShowModal} props={props} />
      ) : null}
    </>
  );
};

export default Card;

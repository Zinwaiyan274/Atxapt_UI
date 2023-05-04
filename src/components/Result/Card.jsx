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
        class=" relative w-full md:w-[331px] h-auto mb-5  items-center bg-white border border-gray-200 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-red-700 
        dark:hover:bg-red-800"
      >
        {number <= 5 ? (
          number == 1 ? (
            <div class="absolute inline-flex items-center justify-center p-2 w-auto h-6 text-xs font-bold text-secondary bg-light border-[0.5px] border-light bg-[#FBC0C0] rounded-full top-2 left-2 ">
              <img src={vectorIcon} alt="" className="object-cover w-4 h-4 me-2" />
              Best For You
            </div>
          ) : (
            <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-secondary bg-light border-[0.5px] border-light bg-[#FBC0C0] rounded-full top-2 left-2 ">
              {number}
            </div>
          )
        ) : null}

        <img class="object-cover w-full h-auto md:h-[291px] md:w-full " src={img} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">    
          <a href="#" onClick={() => setShowModal(true)}>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {props.title}
            </h5>
          </a>
          <p class="mb-3 text-sm text-light dark:text-gray-100">{truncate(props.text, 200)}</p>
        </div>
      </motion.div>
      {showModal ? (
        <Modal show={showModal} index={id} setShow={setShowModal} props={props} />
      ) : null}
    </>
  );
};

export default Card;

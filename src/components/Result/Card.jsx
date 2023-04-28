import React from "react";
import { image_1 } from "..";
import { useState } from "react";
import Modal from "../Modal/Modal";
const Card = ({ img, title, text, number }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        href="#"
        onClick={(e)=>setShowModal(true)}
        class=" relative w-full md:w-[331px] h-auto mb-5  items-center bg-white border border-gray-200 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-red-700 
        dark:hover:bg-red-800"
      >
        {number <= 5 ?number == 1 ? (
          <div class="absolute inline-flex items-center justify-center p-2 w-auto h-6 text-xs font-bold text-secondary bg-light border-[0.5px] border-secondary rounded-full top-2 left-2 ">
            Best For You
          </div>
        ) : (
          <div class="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-secondary bg-light border-[0.5px] border-secondary rounded-full top-2 left-2 ">
            {number}
          </div>
        ):null}

        <img class="object-cover w-full h-auto md:h-[291px] md:w-full " src={image_1} alt="" />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <a href="#" onClick={() => setShowModal(true)}>
            <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </a>
          <p class="mb-3 text-sm text-light dark:text-gray-100">{text}</p>
        </div>
      </div>
      {showModal ? (
        <Modal show={showModal} index={number} setShow={setShowModal} />
      ) : null}
    </>
  );
};

export default Card;

import React from "react";
import { image_1 } from "..";
const Card = ({img,title,text}) => {
  return (
      <div
        href="#"
        class=" items-center bg-white border border-gray-200 shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-red-700 
     dark:hover:bg-red-800"
        
      >
        <img
          class="object-cover w-full h-96 md:h-auto md:w-full "
          src={image_1}
          alt=""
        />
        <div class="flex flex-col justify-between p-4 leading-normal">
          <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
          <p class="mb-3 text-sm text-light dark:text-gray-100">
            {text}
          </p>
        </div>
      </div>
  );
};

export default Card;

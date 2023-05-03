import React from "react";
import { useContext } from "react";
import { FormDataContext } from "../../contexts/FormContext";

const Stepper = ({questions,currentIndex}) => {
    const [formData,setFormData] = useContext(FormDataContext)
    const formDatas = Object.keys(formData)
  return (
    <div>
        <p>Step {currentIndex + 1} of {questions.length}</p>
      <ol className="flex gap-2 items-center w-full">
      {
          questions.map((key,index)=>(
              
            currentIndex < index ?
              <li key={index} className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-800`}></li> :
              <li key={index} className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-red-800`}></li>
              
              
              // console.log(`${key}+${index}`) 
          ))
          
      }
      </ol>

    </div>
  );
};

export default Stepper;

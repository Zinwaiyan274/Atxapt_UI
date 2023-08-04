import React from "react";
import { useContext } from "react";
import { FormDataContext } from "../../contexts/FormContext";

const Stepper = ({ questions, currentIndex, setCurrentIndex }) => {
  const [formData, setFormData] = useContext(FormDataContext);
  const formDatas = Object.keys(formData);
  const handleStepClick = (index) => {
    // Update the currentIndex when a step is clicked
    setCurrentIndex(index);
  };
  return (
    <div>
      <p className=" font-semibold text-base my-2 text-redDark mb-5">
        Step {currentIndex + 1} of {questions.length}
      </p>
      <ol className="flex gap-2 items-center w-full mb-5 md:mb-8 lg:mb-10 ">
        {questions.map(
          (key, index) =>
            currentIndex < index ? (
              <li
                key={index}
                className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-gray-800 sm:cursor-pointer`}
                onClick={() => handleStepClick(index)}
              ></li>
            ) : (
              <li
                key={index}
                className={`flex w-full items-center text-blue-600 dark:text-blue-500 after:w-full after:h-1 after:border-b after:border-4 after:inline-block after:border-red-800
              sm:cursor-pointer`}
                onClick={() => handleStepClick(index)}
              ></li>
            )

          // console.log(`${key}+${index}`)
        )}
      </ol>
    </div>
  );
};

export default Stepper;

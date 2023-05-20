import React, { useContext, useState } from "react";
import { image_1 } from "..";
import { FormDataContext } from "../../contexts/FormContext";
import Stepper from "./Stepper";
import Question from "./Question";
import { ButtonStyleOne, ButtonStyleTwo } from "./buttonStyle";
import { motion } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const FirstForm = ({ handleClick, questions }) => {
  const [choices, setChoices] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useContext(FormDataContext);
  const [isChecking, setIsChecking] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  function handleChoiceClick(e) {
    const value = e.target.value;
    let checked = e.target.checked;
    if (checked) {
      // updateFormData(currentQuestionIndex, value);
      setChoices((prev) => [...prev, value]);
    } else {
      setChoices(choices.filter((e) => e !== value));
    }
  }
  function handleNextClick() {
    // updateFormData(currentQuestionIndex,choices)
    setData(choices);
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }
  function handlePrevClick() {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  }
  const setData = (choicesData) => {
    setFormData((pre) => ({
      ...pre,
      ["question1"]: choicesData,
    }));
  };
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentQuestionIndex < questions.length - 1) {
        handleNextClick();
      }
    },
    onSwipedRight: () => handlePrevClick(),
  });
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    setData(choices);
  }
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "1200px" }}
      exit={{ x: window.innerWidth }}
      {...swipeHandlers}
      className="container flex flex-col md:flex-row w-full h-full justify-center items-center overflow-hidden "
    >
      <div className="w-1/2">
        <p className=" text-2xl md:text-4xl font-semibold mb-2 md:mb-4 text-secondary">
          Connect Community
        </p>
        <p className=" text-base font-normal mb-6 text-secondary">In building Amertic</p>
        <img src={image_1} alt="" />
      </div>
      <div className="w-1/2">
        <div>
          <Stepper
            questions={questions}
            currentIndex={currentQuestionIndex}
            setCurrentIndex={setCurrentQuestionIndex}
          />
          <Question text={currentQuestion.text}>
            {currentQuestion.questions.text.map((question, key) => (
              <div
                className={`flex flex-col items-center border  rounded  justify-center border-red-700 ${
                  choices.includes(question) ? "bg-red-100" : "bg-white"
                }  h-32 w-full relative`}
              >
                <input
                  id={`choice-${key}`}
                  type="checkbox"
                  onClick={handleChoiceClick}
                  value={question}
                  className="checkbox absolute top-2 left-3 w-4 h-4 text-red-600 bg-blue-100 accent-red-500 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  checked={choices.includes(question)}
                />
                <label htmlFor={`choice-${key}`} className="icon-label">
                  {currentQuestion.questions.icons.map(
                    (icon, i) =>
                      i === key && (
                        <img
                          src={icon}
                          alt=""
                          className="object-cover w-8 h-8 md:w-10 md:h-10  top-6 left-20"
                          key={i}
                        />
                      )
                  )}
                </label>
                <label
                  htmlFor={`choice-${key}`}
                  className=" text-center my-2 px-5 text-xs md:text-xs w-full"
                >
                  {question}
                </label>
              </div>
            ))}
          </Question>
          <div className="flex justify-between mt-5">
            {currentQuestionIndex > 0 && <ButtonStyleTwo onClick={handlePrevClick} text={"Back"} />}

            {currentQuestionIndex < questions.length - 1 ? (
              <ButtonStyleOne onClick={handleNextClick} text={"Continue"} />
            ) : (
              <ButtonStyleOne onClick={handleSubmit} text={"Continue"} />
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FirstForm;

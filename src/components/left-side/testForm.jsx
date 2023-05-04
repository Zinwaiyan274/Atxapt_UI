import React, { useContext, useState } from "react";
import { carChangerIcon, image_1 } from "..";
import { FormDataContext } from "../../contexts/FormContext";
import Stepper from "./Stepper";
import Question from "./Question";
import Choice from "./Choice";
import { motion } from "framer-motion";
const TestForm = ({ handleClick, questions }) => {
  const [choices, setChoices] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [formData, setFormData] = useContext(FormDataContext);
  const [isChecking, setIsChecking] = useState(false);
  function handleChoiceClick(e) {
    const value = e.target.value;
    let checked = e.target.checked;
    if (checked) {
      setChoices((prev) => [...prev, value]);
    } else {
      setChoices(choices.filter((e) => e !== value));
    }
  }
  function handleNextClick() {
    // updateFormData(currentQuestionIndex,choices)
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  }
  function handlePrevClick() {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  }
  const updateFormData = (questionNumber, choicesData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`question${questionNumber + 1}`]: choicesData,
    }));
  };
  const setData = (choicesData) => {
    setFormData((pre) => ({
      ...pre,
      ["question1"]: choicesData,
    }));
  };
  console.log(formData);
  console.log(choices);
  function handleSubmit(e) {
    e.preventDefault();
    handleClick();
    setData(choices);
    // updateFormData(currentQuestionIndex, choices);
    // fetch("http://localhost:5000/api/recommender", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log("Data posted successfully:", result);
    //   })
    //   .catch((error) => {
    //     console.error("Error posting data:", error);
    //   });
  }

  const ShowForm = () => {
    console.log(questions[0].questions.text);
    switch (currentQuestionIndex) {
      case 0:
        return (
          <Question text={questions[0].text}>
            {questions[0].questions.text.map((question,key) => (
              // <Choice key={key} text={question} onClick={handleChoiceClick} value={question} />
              <div className="flex flex-col items-center border border-red-500   rounded  justify-center dark:border-red-700 bg-red-100 h-32 w-full relative">
                <input
                  type="checkbox"
                  onClick={handleChoiceClick}
                  value={question}
                  className="absolute top-2 left-3 w-4 h-4 text-red-600 bg-blue-100 accent-red-500 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                />
                
                {questions[0].questions.icons.map(
                  (icon, i) =>
                    i === key && (
                      <img
                        src={icon}
                        alt=""
                        className="object-cover w-10 h-10  top-6 left-20"
                        key={i}
                      />
                    )
                )}

                <label className=" text-center mt-2 px-5 text-sm w-full">{question}</label>
              </div>
            ))}
          </Question>
        );
        case 1:
          return (
            <Question text={questions[1].text}>
              {questions[1].questions.text.map((question,key) => (
                // <Choice key={key} text={question} onClick={handleChoiceClick} value={question} />
                <div className="flex flex-col items-center border border-red-500   rounded  justify-center dark:border-red-700 bg-red-100 h-32 w-full relative">
                  <input
                    type="checkbox"
                    onClick={handleChoiceClick}
                    value={question}
                    className="absolute top-2 left-3 w-4 h-4 text-red-600 bg-blue-100 accent-red-500 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  />
                  
                  {questions[1].questions.icons.map(
                    (icon, i) =>
                      i === key && (
                        <img
                          src={icon}
                          alt=""
                          className="object-cover w-10 h-10  top-6 left-20"
                          key={i}
                        />
                      )
                  )}
  
                  <label className=" text-center mt-2 px-5 text-sm w-full">{question}</label>
                </div>
              ))}
            </Question>
          );
    }
  };
  const currentQuestion = questions[currentQuestionIndex];
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: "1200px" }}
      exit={{ x: window.innerWidth }}
      className="container flex w-[1200px] h-[640px] justify-center items-center overflow-hidden "
    >
      <div className="w-1/2">
        <p className=" text-4xl text-secondary">Connect Community</p>
        <p className=" text-base text-secondary">In building Amertic</p>
        <img src={image_1} alt="" />
      </div>
      <div className="w-1/2">
        <div>
          <Stepper questions={questions} currentIndex={currentQuestionIndex} />
          <ShowForm />
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

export default TestForm;

const ButtonStyleOne = ({ text, onClick }) => {
  return (
    <a
      href="#_"
      className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-sm text-white bg-gray-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
      data-primary="green-400"
      data-rounded="rounded-2xl"
      data-primary-reset="{}"
      onClick={onClick}
    >
      {text}
      <svg
        className="w-4 h-4 ml-1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </a>
  );
};
const ButtonStyleTwo = ({ text, onClick }) => {
  return (
    <a
      href="#_"
      className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-sm text-white bg-gray-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0"
      data-primary="green-400"
      data-rounded="rounded-2xl"
      data-primary-reset="{}"
      onClick={onClick}
    >
      {text}
    </a>
  );
};

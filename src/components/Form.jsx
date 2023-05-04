import React from "react";
import { image_1 } from ".";
import Combine from "./left-side/Combine";
import { StepContext } from "../contexts/StepContext";
import { ComponentContext } from "../contexts/HandleComponent";
import { useContext } from "react";
import { useState } from "react";
import { questionsForCommunity, questionsForPlace } from "./QuestionSets";
import FirstForm from "./left-side/FirstForm";
import SecondForm from "./left-side/SecondForm";
import { motion } from "framer-motion";
import TestForm from "./left-side/testForm";

const Form = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useContext(StepContext);
  const [isChange, setIsChange] = useState(0);
  console.log(questionsForCommunity.length);
  const changeHandle = () =>{
    setIsChange(isChange == 0 ? 1 : 0)
  }
  const Forms = () => {
    switch(isChange){
      case 0:
        return(
          <>
          <FirstForm handleClick={changeHandle} questions={questionsForCommunity} />
          {/* <Combine questions={questionsForCommunity} /> */}
          {/* <TestForm handleClick={changeHandle} questions={questionsForCommunity} /> */}
          </>
          
        )
      case 1:
        return(
          <SecondForm handleClick={changeHandle} questions={questionsForPlace} />
        )
    }
  };

  return <Forms />;
};

export default Form;

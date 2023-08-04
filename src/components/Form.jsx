import React from "react";
import { useState } from "react";
import { questionForNeighborhood, questionsForCommunity, questionsForPlace } from "./QuestionSets";
import FirstForm from "./left-side/FirstForm";
import SecondForm from "./left-side/SecondForm";
import ThirdForm from "./left-side/ThirdForm";

const Form = () => {
  const [isChange, setIsChange] = useState(0);
  const changeHandle = () => {
    // setIsChange(isChange == 0 ? 1 : 0);
    setIsChange((prevValue) => (prevValue + 1) % 3);
  };
  const Forms = () => {
    // eslint-disable-next-line default-case
    switch (isChange) {
      case 0:
        return <ThirdForm handleClick={changeHandle} questions={questionForNeighborhood} />;
      case 1:
        return (
          <>
            <FirstForm
              handleClick={changeHandle}
              questions={questionsForCommunity}
              changeState={setIsChange}
            />
          </>
        );
      case 2:
        return (
          <SecondForm
            handleClick={changeHandle}
            questions={questionsForPlace}
            changeState={setIsChange}
          />
        );
    }
  };

  return <Forms />;
};

export default Form;

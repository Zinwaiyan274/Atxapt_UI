import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
export const StepContext = createContext();

export const StepContextProvider = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [step,setStep] = useState(1)
  return (
    <StepContext.Provider value={[currentQuestionIndex, setCurrentQuestionIndex,step,setStep]}>
      {children}
    </StepContext.Provider>
  );
};

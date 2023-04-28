import React, { useState, useEffect } from 'react';
import Question from './Question';
// import Choice from './Choice';
import Stepper from './Stepper';
import { useContext } from 'react';
import { StepContext, useStepContext } from '../../contexts/StepContext';
import { FormDataContext } from '../../contexts/FormContext';
import { ComponentContext } from '../../contexts/HandleComponent';
import { ResultContext } from '../../contexts/ResultContext';
import { questionsForCommunity } from '../QuestionSets';

function Combine({questions}) {

  const [choices, setChoices] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] =  useContext(StepContext);
  const [isChange,setIsChange] = useContext(ComponentContext);
  const [isResult,setIsResult] = useContext(ResultContext);
  const [formData,setFormData] = useContext(FormDataContext);
  const formDataArray = Object.keys(formData);
  const questionForString = JSON.stringify(questions);
  const currentquestionForString = JSON.stringify(questionsForCommunity)
  function handleChoiceClick(e) {
    e.preventDefault()
    const value = e.target.value 
    const checked = e.target.checked 
    if(checked){
      setChoices(pre => [...pre,value])
      
    }else{
      setChoices(choices.filter((e)=>(e !== value)))
    }
    
  }
  function handleNextClick() {
    updateFormData(currentQuestionIndex,choices)
    // setIsChange(prev => prev + 1)
      
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      if (setCurrentQuestionIndex === questionsForCommunity.length - 1){
        setIsChange(false)
        setCurrentQuestionIndex(1)
        console.log("error for isChange");
      }
      console.log("error3");
  }
  const updateFormData = (questionNumber, choicesData) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [`question${questionNumber+1}`]: choicesData,
    }));
  };
  function handlePrevClick() {
    setCurrentQuestionIndex(prevIndex => prevIndex - 1);
  }
  console.log(currentQuestionIndex);
  console.log(isChange);
  function handleSubmit(e) {
    e.preventDefault()
    setIsChange(prev => 0)
    setIsResult(true)
    fetch('http://localhost:4000/answers', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(formData)
})
  .then(response => response.json())
  .then(result => {
    console.log('Data posted successfully:', result);
  })
  .catch(error => {
    console.error('Error posting data:', error);
  });
  }
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div>
      <Stepper questions={questions} />
      <Question text={currentQuestion.text}>
        {currentQuestion.questions.map(( question,key) => (
          <Choice
          key={key}
          text={question} onClick={handleChoiceClick} value={question}

          />
        ))}
      </Question>
      <div className='flex justify-between mt-5'>
        {currentQuestionIndex > 0 && (
          <ButtonStyleTwo onClick={handlePrevClick} text={'Back'} />
        )}
        { questionForString === currentquestionForString   ? (
          <ButtonStyleOne onClick={handleNextClick} text={"Continue"} />
          ) : (
          <ButtonStyleOne onClick={handleSubmit} text={"Submit"} />
          
        )}
        
      </div>
    </div>
  );
}

export default Combine;

const Choice = ({ text, onClick,value }) => {
  return (
    <div className='flex items-center pl-4 border border-red-500 rounded dark:border-red-700 bg-red-200 h-32 max-w-full relative px-20 py-10'>
        <input type="checkbox" onChange={onClick} value={value} className='absolute top-2 left-3 w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'  />
      <label className='absolute bottom-2 text-sm'>
        {text}
      </label>
    </div>
  );
}
const ButtonStyleOne = ({text,onClick})=>{
  return(
    
<a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-sm text-white bg-gray-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}" onClick={onClick}>
{text}
<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a>
  )
}
const ButtonStyleTwo = ({text,onClick})=>{
  return(
    
<a href="#_" className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-sm text-white bg-gray-500 rounded-md hover:bg-green-400 sm:w-auto sm:mb-0" data-primary="green-400" data-rounded="rounded-2xl" data-primary-reset="{}" onClick={onClick}>
<svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
{text}
</a>
  )
}
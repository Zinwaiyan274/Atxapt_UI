import React from 'react'
import { image_1 } from '.'
import Combine from './left-side/Combine'
import { StepContext } from '../contexts/StepContext'
import { ComponentContext } from '../contexts/HandleComponent'
import { useContext } from 'react'
import { useState } from 'react'
import { questionsForCommunity, questionsForPlace } from './QuestionSets'


const Form = () => {
  const [currentQuestionIndex,setCurrentQuestionIndex] = useContext(StepContext)
  const [isChange,setIsChange] = useContext(ComponentContext)
  const Forms = ()=>{
    if(isChange < questionsForCommunity.length -1 ){
      return (
        <div className='container flex w-[1200px] h-[640px] justify-center items-center '>
        <div className='w-1/2'>
            <p className=' text-4xl text-secondary'>Connect Community</p>
            <p className=' text-base text-secondary'>In building Amertic</p>
            <img src={image_1} alt="" />
        </div>
        <div className='w-1/2'>
            <Combine questions={questionsForCommunity}/>
        </div>

    </div>
      )
    }else {
      return(
        <div className='container flex w-[1200px] h-[640px] justify-center items-center '>
        <div className='w-1/2'>
            <p className=' text-4xl text-secondary'>Select Your Pace</p>
            <p className=' text-base text-secondary'>In building Amertic</p>
            <img src={image_1} alt="" />
        </div>
        <div className='w-1/2'>
            <Combine questions={questionsForPlace}/>
        </div>

    </div>
      )
    }
  }

  return (
    

    <Forms />
    
  )
}

export default Form
import { useState } from 'react'
import './App.css'
import Options from './components/Options'
import Description from "./components/Description.jsx";
import Feedback from "./components/Feedback.jsx";
import AddLocalStorage from "./components/AddLocalStorage.jsx";

function App() {
  const [feedbacks, setFeedback] = AddLocalStorage('feedbacks', {
      good: 0,
      neutral: 0,
      bad: 0
  })

    const totalFeedbacks = Object.values(feedbacks).reduce(((acc, value)=>acc+value), 0)

    const positiveFeedback = (<span> {Math.round((feedbacks.good / totalFeedbacks) * 100)} %</span>)

    const resetFeedbacks = Object.keys(feedbacks).reduce((acc, key)=>{return {...acc, [key]:0}}, {})

    const handleClick = (key) =>{
        setFeedback({...feedbacks, [key]:feedbacks[key]+1 })
    }

    const handleReset = ()=>{
        setFeedback(resetFeedbacks)
    }

  return (
    <>
        <Description/>

        <Options feedbackKeys={Object.keys(feedbacks)} handleClick={handleClick} totalFeedbacks={totalFeedbacks} handleReset={handleReset}/>

        <Feedback feedbacks={[...Object.entries(feedbacks), ['total', totalFeedbacks], ['positive', positiveFeedback]]} totalFeedbacks={totalFeedbacks} />
    </>
  )
}

export default App

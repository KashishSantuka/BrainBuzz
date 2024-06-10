import { useState, useCallback, useRef } from "react";
import QUESTIONS from "../question";
import Summary from "./Summary";

import Question from "./Question";

export default function Quiz() {
  
  const [userAnswers, setUserAnswers] = useState([]);

  console.log(userAnswers.length)
  console.log(userAnswers)

  const activeQuestionIndex =  userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  console.log({active:activeQuestionIndex, question:QUESTIONS.length})

  const handleSelectorAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswer) => {
      return [...prevUserAnswer, selectedAnswer];
    });
  }, []); 

  const handleSkipAnswer = useCallback( () => handleSelectorAnswer(null), [handleSelectorAnswer])

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers}/>
  }
    
   

  return (
    <div id="quiz">
     <Question 
     key={activeQuestionIndex}
     index={activeQuestionIndex}
     onSelectAnswer={handleSelectorAnswer}
     onSkipAnswer={handleSkipAnswer}
     />
    </div>
  );
}
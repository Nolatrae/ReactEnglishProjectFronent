import React from 'react';
import './QuizStyles.scss'

const QuizCard =  ({ questions }) => {

  function Result( { correct } ) {
    return (
      <div className="result">
        <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
        <h2>Вы отгадали {correct} ответа из {questions.length}</h2>
        <a href='/quiz'><button>Попробовать снова</button></a>
      </div>
    );
  }
  
  function Game( {step, question, onClickVariant } ) {
    const persent = Math.round((step / questions.length) * 100)
  
    return (
      <>
        <div className="progress">
          <div style={{ width: `${persent}%` }} className="progress__inner"></div>
        </div>
        <p className='quiz_translate'>{question.quest}</p>
        <ul>
          {
            question.variants.map((text, index) =>
              <li onClick={() => onClickVariant(index)} key={index}>{text}</li>)
          }
        </ul>
      </>
    );
  }


  const [step, setStep] = React.useState(0)
  const [correct, setCorrect] = React.useState(0)
  const question = questions[step]

  const onClickVariant= (index) => {
    setStep(step+1)

    if (index === question.correct){
      setCorrect(correct + 1)
    }
    
  }

  return (
    <div className="QuizCard">
          {
        step !== questions.length 
        ? <Game step={step} question={question} onClickVariant={onClickVariant} />
        : <Result correct={correct}/> 
      }
    </div>
  )
}
export default QuizCard
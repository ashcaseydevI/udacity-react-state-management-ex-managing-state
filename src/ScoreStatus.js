import React from 'react';

const ScoreStatus = props => {
  return(
    /* stateless and will be passing props in for score status */
    /* using templated styling from starter code */
    <p className="text">Your score: {props.numCorrect} / {props.numQuestions}</p>
  )
}

export default ScoreStatus;

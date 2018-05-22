import React from 'react';

const Challenge = (props) => {
  return (
    <div>
        <h2>Mental Math</h2>
        <div className="equation">
            <p className="text">{`${props.value1} + ${props.value2} + ${props.value3} = ${props.proposedAnswer}`}</p>
        </div>
        <button>True</button>
        <button>False</button>
    </div>
  )
}

export default Challenge;
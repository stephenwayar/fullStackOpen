import React from "react";

const Total = ({sum}) => {

  const total = sum.reduce((accum, curVal) => {
    return(accum + curVal.exercises)
    }, 0)

  return(
    <div>
      <p>
        Number of exercises: {total}
      </p>
    </div>
  )
}

export default Total
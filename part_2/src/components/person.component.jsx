import React from "react";

const Person = ({person, handleDelete}) => {
  return(
    <div>
      <p>
        {person.name === "" ? "" : <b>Name:</b>} {person.name} 
        {person.number === "" ? "" : <b> Number:</b>} {person.number}

        <button onClick={handleDelete}>delete</button>
      </p>
    </div>
  )
}
export default Person
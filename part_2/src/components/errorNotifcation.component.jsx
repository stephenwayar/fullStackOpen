import React from "react"
import "./errorNotfication.styles.css"

const ErrorNotification = ({ message }) => {
  if (message === null) {
    return null
  }

  return (
    <div className='error'>
      {message}
    </div>
  )
}
export default ErrorNotification
import React from "react"
import "./errorNotfication.styles.css"

const ErrorNotification = ({ err }) => {
  if (err === null) {
    return null
  }

  return (
    <div className='error'>
      {err}
    </div>
  )
}
export default ErrorNotification
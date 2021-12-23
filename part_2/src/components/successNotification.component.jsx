import React from "react"
import "./successNotification.styles.css"

const SuccessNotification = ({ notification }) => {

  if (notification === null) {
    return null
  }

  return (
    <div className="success">
      {notification}
    </div>
  )
}
export default SuccessNotification
import React from "react"

const Notification = ({ message, isError }) => {
    if (message === null) {
      return null
    }

    const errorStyle = isError 
      ? 'notification-error'
      : ''
  
    return (
      <div className={`notification ${errorStyle}`}>
        {message}
      </div>
    )
  }

  export default Notification;
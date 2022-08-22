import React from 'react'
import './message.styles.scss'

// components
import { Avatar } from '../'

const Message = ({ text, date, avatar, isYour }) => {
  if (isYour) {
    return (
      <div className="message your-message">
        <div className="your-message__container">
          <div className="your-message__text">
            <p>{text && text}</p>
          </div>
          <div className="your-message__date">
            <p>{date && date}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="message interlocutor-message">
      <div className="interlocutor-message__container">
        <Avatar icon={avatar} />
        <div className="interlocutor-message__content">
          <div className="interlocutor-message__text">
            <p>{text && text}</p>
          </div>
          <div className="interlocutor-message__date">
            <p>{date && date}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message

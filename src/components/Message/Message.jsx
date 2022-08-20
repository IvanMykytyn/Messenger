import React from 'react'
import './message.styles.scss'

// components
import { Avatar } from '../'

const Message = ({ isYour, text, date }) => {
  if (isYour) {
    return (
      <div className="message your-message">
        <div className="your-message__container">
          <p className="your-message__text">
            {text ? text : 'Messseheshsehsehage'}
          </p>
          <div className="your-message__date">
            <p>{date ? date : '4/22/17, 4:05 AM'}</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="message interlocutor-message">
      <div className="interlocutor-message__container">
        <Avatar />
        <div className="interlocutor-message__content">
          <p className="interlocutor-message__text">
            {text ? text : 'Messseheshsehsehage'}
          </p>
          <div className="interlocutor-message__date">
            <p>{date ? date : '4/22/17, 4:05 AM'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message

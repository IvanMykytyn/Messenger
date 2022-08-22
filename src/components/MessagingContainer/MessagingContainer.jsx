import React from 'react'
import './messaging-container.styles.scss'
import { useSelector } from 'react-redux'

//components
import { Message } from '../'

const MessagingContainer = () => {
  const {
    currentContact: { messages, img },
  } = useSelector((store) => store.chat)

  return (
    <main className="messaging-container">
      {messages &&
        messages.length !== 0 &&
        messages.map((item) => {
          const { id, message, date, isYour } = item
          return (
            <Message
              key={id}
              text={message}
              date={date}
              isYour={isYour}
              avatar={img}
            />
          )
        })}
    </main>
  )
}

export default MessagingContainer

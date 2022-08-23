import React, { useEffect, useRef } from 'react'
import './messaging-container.styles.scss'
import { useSelector } from 'react-redux'

//components
import { Message } from '../'

const MessagingContainer = () => {
  const {
    currentContact: { messages, img, id },
  } = useSelector((store) => store.chat)

  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView(true)
  }

  useEffect(() => {
    scrollToBottom()
  }, [id, messages])

  return (
    <main className="messaging-container">
      <div className="messaging-outer">
        <div ref={messagesEndRef}></div>
        {messages &&
          messages.length !== 0 &&
          messages.map((item) => {
            const { id, message, date, isYour } = item
            const messageDate = new Date(date)

            return (
              <Message
                key={id}
                text={message}
                date={
                  date &&
                  messageDate.toLocaleString('en-US', {
                    dateStyle: 'short',
                    timeStyle: 'short',
                  })
                }
                isYour={isYour}
                avatar={img}
              />
            )
          })}
      </div>
    </main>
  )
}

export default MessagingContainer

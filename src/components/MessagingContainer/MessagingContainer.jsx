import React, { useEffect, useRef } from 'react'
import { useSelector } from 'react-redux'
import './messaging-container.styles.scss'

//components
import { Message } from '../'

const MessagingContainer = () => {
  // global store
  const {
    currentContact: { messages, img, id },
  } = useSelector((store) => store.chat)

  // create ref to the last message
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView(true)
  }

  // scroll to bottom
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

            const formattedDate = messageDate.toLocaleString('en-US', {
              dateStyle: 'short',
              timeStyle: 'short',
            })

            return (
              <Message
                key={id}
                text={message}
                date={date && formattedDate}
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

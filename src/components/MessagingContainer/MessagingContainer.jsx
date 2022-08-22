import React, { useEffect, useRef } from 'react'
import './messaging-container.styles.scss'
import { useSelector } from 'react-redux'

//components
import { Message } from '../'

const MessagingContainer = () => {
  const {
    currentContact: { messages, img },
  } = useSelector((store) => store.chat)

  // const myRef = useRef(null)

  // const executeScroll = () => myRef.current.scrollIntoView()

  // useEffect(() => {
  //   executeScroll()
  // }, [])

  return (
    <main className="messaging-container">
      <div>
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

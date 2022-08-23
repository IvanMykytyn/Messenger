import React, { useState } from 'react'
import './chat-container.styles.scss'
import { useSelector, useDispatch } from 'react-redux'

// components
import { Avatar, MessagingContainer } from '../'

// icons
import sendIcon from '../../assets/icons/send.png'

// actions
import { sendMessage } from '../../features/chat/chatSlice'
import { keyboard } from '@testing-library/user-event/dist/keyboard'

const ChatContainer = () => {
  const dispatch = useDispatch()
  const { currentContact } = useSelector((store) => store.chat)
  const [message, setMessage] = useState('')

  if (!currentContact) {
    return startChat()
  }

  const { name, img, id } = currentContact

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (message === '') {
      return
    }

    dispatch(sendMessage({ message, id }))
    setMessage('')
  }

  return (
    <div className="chat">
      <header className="chat-header">
        <Avatar icon={img} online={true} />
        <h2>{name}</h2>
      </header>
      {currentContact.messages?.length === 0 ? (
        <div className="start-chat__container">
          <p className="start-chat__text">
            Type your message to start a conversation
          </p>
        </div>
      ) : (
        <MessagingContainer />
      )}
      <footer className="chat-footer">
        <form className="chat-footer__input" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            value={message}
            onChange={handleMessage}
            autoComplete="off"
            placeholder="Type your message"
          />
          <button type="submit">
            <img src={sendIcon} alt="send-icon" className="chat-footer__icon" />
          </button>
        </form>
      </footer>
    </div>
  )
}

export default ChatContainer

function startChat() {
  return (
    <div className="chat start-chat">
      <header className="chat-header start-chat__header"></header>
      <div className="start-chat__container">
        <p className="start-chat__text">Select chat to start a conversation</p>
      </div>
      <footer className="chat-footer"></footer>
    </div>
  )
}

import React, { useState } from 'react'
import './chat-container.styles.scss'
import { useSelector, useDispatch } from 'react-redux'

// components
import { Avatar, MessagingContainer } from '../'

// icons
import sendIcon from '../../assets/icons/send.png'

// actions
import { sendMessage } from '../../features/chat/chatSlice'

const ChatContainer = () => {
  const dispatch = useDispatch()
  const {
    currentContact: { name, img, id },
  } = useSelector((store) => store.chat)

  const [message, setMessage] = useState('')

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = () => {
    dispatch(sendMessage({ message, id }))
    setMessage('')
  }

  return (
    <div className="chat">
      <header className="chat-header">
        <Avatar icon={img} online={true} />
        <h2>{name}</h2>
      </header>
      <MessagingContainer />
      <footer className="chat-footer">
        <div className="chat-footer__input">
          <input
            type="text"
            name="search"
            value={message}
            onChange={handleMessage}
            autoComplete="off"
            placeholder="Search or start new chat"
          />
          <img
            src={sendIcon}
            alt="send-icon"
            onClick={handleSubmit}
            className="chat-footer__icon"
          />
        </div>
      </footer>
    </div>
  )
}

export default ChatContainer

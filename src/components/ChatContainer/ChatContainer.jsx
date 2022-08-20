import React from 'react'
import './chat-container.styles.scss'

// components
import { Avatar, MessagingContainer } from '../'

// icons
import sendIcon from '../../assets/icons/send.png'

const ChatContainer = () => {
  const name = 'Josefina'

  return (
    <div className="chat">
      <header className="chat-header">
        <Avatar online={true} />
        <h2>{name}</h2>
      </header>
      <MessagingContainer />
      <footer className="chat-footer">
        <div className="chat-footer__input">
          <input
            type="text"
            name="search"
            // value={search}
            // onChange={handleSearch}
            autoComplete="false"
            placeholder="Search or start new chat"
          />
          <img
            src={sendIcon}
            alt="send-icon"
            // onClick={clearSearch}
            className="chat-footer__icon"
          />
        </div>
      </footer>
    </div>
  )
}

export default ChatContainer

import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './chat-container.styles.scss'

// components
import { Avatar, MessagingContainer } from '../'

// icons
import { sendIcon, returnIcon } from '../../assets/icons'

// actions
import { sendMessage, setContactsBar } from '../../features/chat/chatSlice'

const ChatContainer = () => {
  const dispatch = useDispatch()

  // global store
  const { currentContact } = useSelector((store) => store.chat)
  // local state
  const [message, setMessage] = useState('')

  // if contact is not selected yet
  if (!currentContact) {
    return startChat()
  }

  // get data from current contact
  const { name, img, id } = currentContact

  const handleMessage = (e) => {
    setMessage(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // return if the input is currently empty
    if (message === '') {
      return
    }

    // store message and reset the input
    dispatch(sendMessage({ message, id }))
    setMessage('')
  }

  return (
    <div className="chat">
      <header className="chat-header">
        <Avatar icon={img} online={true} />
        <h2>{name}</h2>
        <div
          onClick={() => dispatch(setContactsBar(true))}
          className="return-button"
        >
          <img src={returnIcon} alt="return-icon" />
        </div>
      </header>
      {/* If there are no messages with the current contact */}
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

// function that returns an html snippet if a contact is not selected yet
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

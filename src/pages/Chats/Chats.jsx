import React from 'react'
import './chats.styles.scss'

// components
import { ChatContainer, ContactsContainer } from '../../components'

const Chats = () => {
  return (
    <div className="chats">
      <ContactsContainer />
      <ChatContainer />
    </div>
  )
}

export default Chats

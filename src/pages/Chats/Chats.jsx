import React from 'react'
import { useSelector } from 'react-redux'
import './chats.styles.scss'

// components
import { ChatContainer, ContactsContainer } from '../../components'

const Chats = () => {
  const { isOpenContacts } = useSelector((store) => store.chat)

  return (
    <div className={`chats ${isOpenContacts ? 'chats-open' : ''}`}>
      <ContactsContainer />
      <ChatContainer />
    </div>
  )
}

export default Chats

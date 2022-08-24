import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './chats.styles.scss'

// react-router-dom
import { useNavigate } from 'react-router-dom'

// components
import { ChatContainer, ContactsContainer } from '../../components'

const Chats = () => {
  const navigate = useNavigate()

  // global store
  const { user, errorMessage } = useSelector((store) => store.user)
  const { isOpenContacts } = useSelector((store) => store.chat)

  useEffect(() => {
    if (errorMessage || !user) {
      navigate('/auth')
    }
  }, [navigate, user, errorMessage])

  return (
    <div className={`chats ${isOpenContacts ? 'chats-open' : ''}`}>
      <ContactsContainer />
      <ChatContainer />
    </div>
  )
}

export default Chats

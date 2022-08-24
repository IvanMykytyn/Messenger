import React from 'react'
import { useDispatch } from 'react-redux'

// components
import { Avatar } from '../'

// actions
import {
  setCurrentContact,
  clearSearch,
  setContactsBar,
} from '../../features/chat/chatSlice'

const Contact = ({ id, avatar, name, lastMessage, date }) => {
  const dispatch = useDispatch()

  return (
    <div
      className="contact"
      onClick={() => {
        dispatch(clearSearch())
        dispatch(setCurrentContact(id))
        dispatch(setContactsBar(false))
      }}
    >
      <div>
        <Avatar icon={avatar} online={true} />
      </div>
      <div className="contact__text-container">
        <h3 className="contact__name">{name}</h3>
        <p className="contact__last-message">{lastMessage}</p>
      </div>
      <div className="contact__date">
        <p>{date ? date : ''}</p>
      </div>
    </div>
  )
}

export default Contact

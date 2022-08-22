import React from 'react'
import { useDispatch } from 'react-redux'

// components
import { Avatar } from '../'

// actions
import { setCurrentContact } from '../../features/chat/chatSlice'

const Contact = ({ id, avatar, name, lastMessage, date }) => {
  const dispatch = useDispatch()

  return (
    <div className="contact" onClick={() => dispatch(setCurrentContact(id))}>
      <div>
        <Avatar icon={avatar && avatar} online={true} />
      </div>
      <div className="contact__text-container">
        <h3 className="contact__name">{name}</h3>
        <p className="contact__last-message">
          {lastMessage && truncate(lastMessage, 80)}
        </p>
      </div>
      <div className="contact__date">{date ? date : 'A long time ago'}</div>
    </div>
  )
}

export default Contact

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
}

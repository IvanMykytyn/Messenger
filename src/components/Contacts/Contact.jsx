import React from 'react'

// components
import { Avatar } from '../'

const Contact = ({ avatar, name, lastMessage, date }) => {
  return (
    <div className="contact">
      <div>
        <Avatar icon={avatar && avatar} online={true} />
      </div>
      <div className='contact__text-container'>
        <h3 className="contact__name">{name}</h3>
        <p className="contact__last-message">{truncate(lastMessage, 80)}</p>
      </div>
      <div className="contact__date">{date}</div>
    </div>
  )
}

export default Contact

function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}
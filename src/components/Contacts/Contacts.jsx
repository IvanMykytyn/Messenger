import React from 'react'
import './contacts.styles.scss'

// components
import Contact from './Contact'
import { useSelector } from 'react-redux'

const Contacts = () => {
  const { contacts } = useSelector((store) => store.chat)

  return (
    <div className="contacts">
      <header>
        <h2 className="contacts-header__text">Chats</h2>
      </header>

      {contacts.map((contact) => {
        const { id, name, messages, img } = contact
        const numberOfMessages = messages.length

        const lastMessage = numberOfMessages !== 0 ? messages[0].message : ''
        const lastMessageDate = numberOfMessages !== 0 ? messages[0].date : ''

        return (
          <Contact
            key={id}
            id={id}
            name={name}
            lastMessage={lastMessage}
            date={lastMessageDate}
            avatar={img}
          />
        )
      })}
    </div>
  )
}

export default Contacts

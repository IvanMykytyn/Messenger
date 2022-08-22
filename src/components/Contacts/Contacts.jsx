import React from 'react'
import './contacts.styles.scss'

// components
import Contact from './Contact'
import { useSelector } from 'react-redux'

const Contacts = () => {
  const { contacts, search } = useSelector((store) => store.chat)

  const sortedContacts = sortByLastMessage(contacts)

  const filteredContacts = filterContacts(sortedContacts, search)

  return (
    <div className="contacts">
      <header>
        <h2 className="contacts-header__text">Chats</h2>
      </header>

      {filteredContacts &&
        filteredContacts.map((contact) => {
          const { id, name, messages, img } = contact
          const numberOfMessages = messages.length

          const lastMessage = numberOfMessages !== 0 ? messages[0].message : ''
          const lastMessageDate = numberOfMessages !== 0 ? messages[0].date : ''

          const messageDate = new Date(lastMessageDate)
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              lastMessage={lastMessage}
              date={
                lastMessageDate &&
                messageDate.toLocaleString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })
              }
              avatar={img}
            />
          )
        })}
    </div>
  )
}

export default Contacts

function sortByLastMessage(contacts) {
  const arr = contacts.map((currentObject) => ({ ...currentObject }))

  arr.sort((a, b) => {
    if (a.messages.length === 0 && b.messages.length === 0) {
      return 0
    }
    if (a.messages.length === 0 && b.messages.length !== 0) {
      return 1
    }
    if (a.messages.length !== 0 && b.messages.length === 0) {
      return -1
    }

    const aDate = new Date(a.messages[0].date)
    const bDate = new Date(b.messages[0].date)

    if (aDate > bDate) {
      return -1
    }
    if (aDate < bDate) {
      return 1
    }

    return 0
  })
  return arr
}

function filterContacts(contacts, search) {
  return contacts.filter((item) => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
  })
}

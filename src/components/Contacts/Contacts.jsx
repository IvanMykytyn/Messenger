import React, { useMemo } from 'react'
import { useSelector } from 'react-redux'
import './contacts.styles.scss'

// components
import Contact from './Contact'

// utils
import { sortByLastMessage, filterContacts } from '../../utils/contacts'

// custom hooks
import useViewport from '../../utils/useViewport'

const Contacts = () => {
  // global store
  const { contacts, search } = useSelector((store) => store.chat)
  const { width } = useViewport()

  // sort all contacts by last message
  const sortedContacts = useMemo(() => {
    return sortByLastMessage(contacts)
  }, [contacts])

  // then filter them by search
  const filteredContacts = useMemo(() => {
    return filterContacts(sortedContacts, search)
  }, [sortedContacts, search])

  // cut last message depend on screen size
  let maxLastMessageLength = 70
  if (width < 550) {
    maxLastMessageLength = 30
  }

  return (
    <div className="contacts">
      <header>
        <h2 className="contacts-header__text">Chats</h2>
      </header>
      {filteredContacts &&
        filteredContacts.map((contact) => {
          // get data from the current contact
          const { id, name, messages, img } = contact
          const numberOfMessages = messages.length

          // get data of the last message
          const lastMessage = numberOfMessages !== 0 ? messages[0].message : ''
          const lastMessageDate = numberOfMessages !== 0 ? messages[0].date : ''

          // convert to Date Type
          const convertedDate = new Date(lastMessageDate)

          // format Date
          const options = {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
          }

          const messageDate = convertedDate.toLocaleString('en-US', options)
          return (
            <Contact
              key={id}
              id={id}
              name={name}
              lastMessage={
                lastMessage && truncate(lastMessage, maxLastMessageLength)
              }
              date={lastMessageDate && messageDate}
              avatar={img}
            />
          )
        })}
    </div>
  )
}

export default Contacts

function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + '…' : str
}

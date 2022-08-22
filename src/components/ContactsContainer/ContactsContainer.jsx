import React, { useState } from 'react'
import './contacts-container.styles.scss'
// import { useSelector } from 'react-redux'

// components
import { Contacts, Avatar } from '../'

// icons
import loupe from '../../assets/icons/loupe.png'
import reject from '../../assets/icons/reject.png'

const ContactsContainer = () => {
  // const { contacts } = useSelector((store) => store.chat)

  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value)
    // filterContact(contacts, search)
  }
  const clearSearch = () => {
    setSearch('')
  }
  return (
    <div className="contacts-container">
      <div className="search">
        <Avatar online={true} />
        <div className="search__container">
          <div className="search__input">
            {/* loupe icon */}
            <img src={loupe} alt="loupe-icon" className="search__input__icon" />
            <input
              type="text"
              name="search"
              value={search}
              onChange={handleSearch}
              autoComplete="off"
              placeholder="Search or start new chat"
            />
            {/* reject icon */}
            <img
              src={reject}
              alt="reject-icon"
              onClick={clearSearch}
              className="search__input__icon-clear"
            />
          </div>
        </div>
      </div>
      <Contacts />
    </div>
  )
}

export default ContactsContainer

// const filterContact = (contacts, search) => {
//   return contacts.filter((item) => {
//     return item.name.toString().toLowerCase().indexOf(search.toLowerCase()) > -1
//   })
// }

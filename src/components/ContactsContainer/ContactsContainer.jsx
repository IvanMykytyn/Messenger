import React from 'react'
import './contacts-container.styles.scss'

// components
import { Contacts, Avatar } from '../'

// icons
import loupe from '../../assets/icons/loupe.png'
import reject from '../../assets/icons/reject.png'

const ContactsContainer = () => {
  return (
    <div className="contacts-container">
      <div className="search">
        <Avatar online={true} />
        <div className="search__container">
          <div className="search__input">
            <img src={loupe} alt="loupe-icon" className="search__input__icon" />
            <input
              type="text"
              name="search"
              // value={search}
              // onChange={handleSearch}
              autoComplete="false"
              placeholder="Search or start new chat"
            />
            <img
              src={reject}
              alt="reject-icon"
              // onClick={clearSearch}
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

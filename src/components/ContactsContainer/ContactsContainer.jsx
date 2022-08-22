import React, { useState } from 'react'
import './contacts-container.styles.scss'
import { useSelector, useDispatch } from 'react-redux'

// components
import { Contacts, Avatar } from '../'

// icons
import loupe from '../../assets/icons/loupe.png'
import reject from '../../assets/icons/reject.png'

// actions
import { setSearch } from '../../features/chat/chatSlice'

const ContactsContainer = () => {
  const dispatch = useDispatch()
  const { search } = useSelector((store) => store.chat)

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }
  const clearSearch = () => {
    dispatch(setSearch(''))
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
            {search && (
              <img
                src={reject}
                alt="reject-icon"
                onClick={clearSearch}
                className="search__input__icon-clear"
              />
            )}
          </div>
        </div>
      </div>
      <Contacts />
    </div>
  )
}

export default ContactsContainer

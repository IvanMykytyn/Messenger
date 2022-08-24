import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './contacts-container.styles.scss'

// components
import { Contacts, Avatar } from '../'

// icons
import { loupe, reject } from '../../assets/icons'

// actions
import { setSearch } from '../../features/chat/chatSlice'
import { setUserObject } from '../../features/user/userSlice'

const ContactsContainer = () => {
  const dispatch = useDispatch()
  // global store
  const { search } = useSelector((store) => store.chat)
  const { user } = useSelector((store) => store.user)

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value))
  }

  const clearSearch = () => {
    dispatch(setSearch(''))
  }

  return (
    <div className="contacts-container">
      <div className="search">
        <div className="user-information__container">
          <div className="user-information">
            <Avatar online={true} icon={user?.img} />
            <h3 className="contact__name">{user?.name}</h3>
          </div>
          <div className="user-information__sign-out">
            <button type="button" onClick={() => dispatch(setUserObject(null))}>
              Sign Out
            </button>
          </div>
        </div>
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

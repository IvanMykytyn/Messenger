import React from 'react'
import './contacts.styles.scss'

// components
import Contact from './Contact'

const Contacts = () => {
  return (
    <div className="contacts">
      <header>
        <h2 className="contacts-header__text">Chats</h2>
      </header>
      <Contact
        name="Alla"
        lastMessage="OGSMSESHSEHshehsh"
        date="Jun 12, 2019"
      />
      <Contact
        name="Alla"
        lastMessage="OGSMSESHSEHshehsseseopgopesgopesgopopesophopseophopeshopsehopseophospehoeshopseophopshosoegoespgopsdfgodophrdopopdroph"
        date="Jun 12, 2019"
      />
      <Contact
        name="Alla"
        lastMessage="OGSMSESHSEHshehsh"
        date="Jun 12, 2019"
      />
      <Contact
        name="Alla"
        lastMessage="OGSMSESHSEHshehsh"
        date="Jun 12, 2019"
      />
      <Contact
        name="Alla"
        lastMessage="OGSMSESHSEHshehsh"
        date="Jun 12, 2019"
      />
      <Contact
        name="Alla"
        lastMessage="OGSMSESHSEHshehsh"
        date="Jun 12, 2019"
      />
    </div>
  )
}

export default Contacts

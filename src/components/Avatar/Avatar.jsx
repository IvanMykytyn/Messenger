import React from 'react'
import './avatar.styles.scss'

// icons
import defaultIcon from '../../assets/icons/defaultPerson.png'
import onlineIcon from '../../assets/icons/online.png'

const Avatar = ({ icon, online }) => {
  return (
    <div className="avatar">
      <img className='avatar__person' src={icon ? icon : defaultIcon} alt="avatar" />
      {online && <img className='avatar__online' src={onlineIcon} alt="online-icon" />}
    </div>
  )
}

export default Avatar

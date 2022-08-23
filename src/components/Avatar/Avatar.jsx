import React from 'react'
import './avatar.styles.scss'

// icons
import { defaultIcon, onlineIcon } from '../../assets/icons'

const Avatar = ({ icon, online }) => {
  return (
    <div className="avatar">
      <img
        className="avatar__person"
        src={icon ? icon : defaultIcon}
        alt="avatar"
      />
      {online && (
        <img className="avatar__online" src={onlineIcon} alt="online-icon" />
      )}
    </div>
  )
}

export default Avatar

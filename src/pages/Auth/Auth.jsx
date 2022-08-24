import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import './auth.styles.scss'

// react-router-dom
import { useNavigate } from 'react-router-dom'

// actions
import { handleGoogleResponse } from '../../features/user/userSlice'

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // global store
  const { user, errorMessage } = useSelector((store) => store.user)

  // handle authentication
  const handleAuth = (response) => {
    dispatch(handleGoogleResponse(response))

    // navigate to the chat page if no error
    if (!errorMessage) {
    }
  }

  useEffect(() => {
    if (!errorMessage && user) {
      navigate('/')
    }
  }, [navigate, user, errorMessage])

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleAuth,
    })

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      type: 'icon',
      theme: 'outline',
      size: 'large',
    })
    // eslint-disable-next-line
  }, [])

  return (
    <div className="auth">
      <div className="auth__container">
        {errorMessage && errorMessage}
        <h2>Sign in via Gmail</h2>
        <div className='auth__sign-in'>
          <div id="signInDiv"></div>
        </div>
      </div>
    </div>
  )
}

export default Auth

import React from 'react'
import './messaging-container.styles.scss'

//components
import { Message } from '../'

const MessagingContainer = () => {
  return (
    <main className="messaging-container">
      <Message text="1" />
      <Message isYour />
      <Message />
      <Message text="2" />
      <Message isYour />
      <Message />
      <Message isYour />
      <Message text="SGOPSEHsehopeshpeshopseophopseophopeshhesopSHSJKEGJSEGKJJEGKSKEJGKSJEJGKJEGJKSEJKGJKSEKJGJKEJSKGJKSEJKGJK" />
      <Message />
      <Message isYour />
      <Message />
      <Message isYour text="4" />
    </main>
  )
}

export default MessagingContainer

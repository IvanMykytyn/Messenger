import { configureStore } from '@reduxjs/toolkit'

// slices
import chatSlice from './features/chat/chatSlice'
import userSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    chat: chatSlice,
  },
})

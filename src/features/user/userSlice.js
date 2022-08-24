import { createSlice } from '@reduxjs/toolkit'

// utils
import handleCallbackResponse from '../../utils/handleResponse'
import {
  getUserFromLocalStorage,
  setUserToLocalStorage,
} from '../../utils/localStorage'

const initialState = {
  user: getUserFromLocalStorage(),
  errorMessage: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    handleGoogleResponse: (state, { payload }) => {
      const callback = handleCallbackResponse(payload)

      if (callback.message) {
        state.errorMessage = callback.message
      } else {
        state.user = callback
        setUserToLocalStorage(callback)
      }
    },
    setUserObject: (state, { payload }) => {
      state.user = payload
      setUserToLocalStorage(payload)
    },
  },
})

export const { handleGoogleResponse, setUserObject } = userSlice.actions

export default userSlice.reducer

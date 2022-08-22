import { v4 as uuidv4 } from 'uuid'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// data
import {
  getContactsFromLocalStorage,
  updateLocalStorage,
} from '../../utils/localStorage'

// thunk
import { sendMessageThunk } from './chatThunk'

// get data from local storage
const contacts = getContactsFromLocalStorage()

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  sendMessageThunk
)

const initialState = {
  isLoading: false,
  contacts: contacts,
  currentContact: contacts[0],
  search: '',
}

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setCurrentContact: (state, { payload }) => {
      state.currentContact = state.contacts.find((item) => item.id === payload)
    },
    setMessage: (state, { payload }) => {
      const { message, id, isYour } = payload
      const index = state.contacts.map((item) => item.id).indexOf(id)

      state.contacts[index].messages.unshift(
        createMessageObject(message, isYour)
      )

      if (state.currentContact.id === state.contacts[index].id) {
        state.currentContact.messages = state.contacts[index].messages
      }

      updateLocalStorage(state.contacts)
    },
  },
  extraReducers: {
    [sendMessage.pending]: (state) => {
      state.isLoading = true
    },
    [sendMessage.fulfilled]: (state, { payload }) => {
      state.isLoading = false
      console.log(payload)
    },
    [sendMessage.rejected]: (state, { payload }) => {
      state.isLoading = false
      console.log(payload)
    },
  },
})

export const { setCurrentContact, setMessage } = chatSlice.actions

export default chatSlice.reducer

const createMessageObject = (message, isYour = false) => {
  return {
    id: uuidv4(),
    message,
    date: 'now',
    isYour: isYour,
  }
}

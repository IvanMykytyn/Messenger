import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// data
import {
  getContactsFromLocalStorage,
  updateLocalStorage,
} from '../../utils/localStorage'

// thunk
import { sendMessageThunk } from './chatThunk'

// utils
import createMessageObject from '../../utils/createMessage'

// get data from local storage
const contacts = getContactsFromLocalStorage()

export const sendMessage = createAsyncThunk(
  'chat/sendMessage',
  sendMessageThunk
)

const initialState = {
  isLoading: false,
  contacts: contacts,
  currentContact: null,
  search: '',
  isOpenContacts: true,
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

      // add message to array
      state.contacts[index].messages.unshift(
        createMessageObject(message, isYour)
      )

      // change the current contact messages array
      if (state.currentContact.id === state.contacts[index].id) {
        state.currentContact.messages = state.contacts[index].messages
      }

      // update local storage
      updateLocalStorage(state.contacts)
    },
    setSearch: (state, { payload }) => {
      state.search = payload
    },

    clearSearch: (state) => {
      state.search = initialState.search
    },

    setContactsBar: (state, { payload }) => {
      state.isOpenContacts = payload
    },
  },
  extraReducers: {
    [sendMessage.pending]: (state) => {
      state.isLoading = true
    },
    [sendMessage.fulfilled]: (state) => {
      state.isLoading = false
    },
    [sendMessage.rejected]: (state, { payload }) => {
      state.isLoading = false
      console.log(payload)
    },
  },
})

export const {
  setCurrentContact,
  setMessage,
  setSearch,
  clearSearch,
  setContactsBar,
} = chatSlice.actions

export default chatSlice.reducer

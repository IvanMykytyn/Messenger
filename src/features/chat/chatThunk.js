import axios from 'axios'

// actions
import { setMessage } from './chatSlice'

export const sendMessageThunk = async ({ message, id }, thunkAPI) => {
  try {
    thunkAPI.dispatch(setMessage({ message, id, isYour: true }))

    const response = await axios.get(`https://api.chucknorris.io/jokes/random`)

    await timeout(2000)

    thunkAPI.dispatch(setMessage({ message: response.data.value, id }))

    return true
  } catch (error) {
    console.log(error)
    thunkAPI.rejectWithValue(error.response.data.message)
  }
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

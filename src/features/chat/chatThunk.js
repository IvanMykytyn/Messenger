import axios from 'axios'

// actions
import { setMessage } from './chatSlice'

export const sendMessageThunk = async ({ message, id }, thunkAPI) => {
  try {
    // set your message
    thunkAPI.dispatch(setMessage({ message, id, isYour: true }))

    // get Chuck Norris joke
    const response = await axios.get(`https://api.chucknorris.io/jokes/random`)

    await timeout(10000)

    // set answer message
    thunkAPI.dispatch(setMessage({ message: response.data?.value, id }))
  } catch (error) {
    console.log(error)
    thunkAPI.rejectWithValue(error.response.data.message)
  }
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

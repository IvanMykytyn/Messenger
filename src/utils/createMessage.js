import { v4 as uuidv4 } from 'uuid'

const createMessageObject = (message, isYour = false) => {
  const date = new Date().toISOString()
  return {
    id: uuidv4(),
    message,
    date,
    isYour: isYour,
  }
}

export default createMessageObject

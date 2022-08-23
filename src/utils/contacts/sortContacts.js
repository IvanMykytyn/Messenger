const sortByLastMessage = (contacts) => {
  const arr = contacts.map((currentObject) => ({ ...currentObject }))

  arr.sort((a, b) => {
    if (a.messages.length === 0 && b.messages.length === 0) {
      return 0
    }
    if (a.messages.length === 0 && b.messages.length !== 0) {
      return 1
    }
    if (a.messages.length !== 0 && b.messages.length === 0) {
      return -1
    }

    const aDate = new Date(a.messages[0].date)
    const bDate = new Date(b.messages[0].date)

    if (aDate > bDate) {
      return -1
    }
    if (aDate < bDate) {
      return 1
    }

    return 0
  })
  return arr
}

export default sortByLastMessage

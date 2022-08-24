import defaultPopulation from '../populate'

export const getContactsFromLocalStorage = () => {
  const contacts = localStorage.getItem('contacts')

  if (!contacts) {
    localStorage.setItem('contacts', JSON.stringify(defaultPopulation))
    return defaultPopulation
  }

  return JSON.parse(contacts)
}

export const updateLocalStorage = (contacts) => {
  localStorage.setItem('contacts', JSON.stringify(contacts))
}

export const setUserToLocalStorage = (user) => {
  localStorage.setItem('user', JSON.stringify(user))
}

export const getUserFromLocalStorage = () => {
  const localStorageUser = localStorage.getItem('user')

  return localStorageUser ? JSON.parse(localStorageUser) : null
}

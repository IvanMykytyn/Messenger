import defaultPopulation from '../populate.js'

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

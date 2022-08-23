const filterContacts = (contacts, search) => {
  return contacts.filter((item) => {
    return item.name.toLowerCase().indexOf(search.toLowerCase()) > -1
  })
}

export default filterContacts

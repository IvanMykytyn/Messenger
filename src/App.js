import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages
import { Chats } from './pages'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chats />} />
        <Route path="*" element={<h2>Not Found</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

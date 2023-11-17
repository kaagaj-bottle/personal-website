import React from 'react'

// importing from mui
import { CssBaseline } from '@mui/material'

// importing from React Router
import { Route, Routes } from 'react-router-dom'

// importing pages
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'
import ContactPage from './pages/ContactPage'

// importing components
import NavBar from './components/NavBar'


const App = () => {
  return (
    <>
      <CssBaseline />

      <NavBar />

      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </>
  )
}

export default App

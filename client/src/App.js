import React from 'react'
import { useState,useEffect } from 'react'
// importing from mui
import { CssBaseline } from '@mui/material'

// importing from React Router
import { Route, Routes, useMatch } from 'react-router-dom'

// importing pages
import AboutPage from './pages/AboutPage'
import ArticlesPage from './pages/ArticlesPage'

// importing components
import NavBar from './components/NavBar'
import NavBar2 from './components/NavBar2'
import MarkdownPost from './components/MarkdownPost'

import articleService from './services/articles.js'
const App = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    articleService.getAll()
      .then(articles => {
        setArticles(articles)
      })
      .catch(err => logger.error(err))
  }, [])


  const match = useMatch('/articles/:id')
  const article = match
    ? articles.find(article => article.id === Number(match.params.id))
    : null
  return (
    <>
      <CssBaseline />

      <NavBar2 />

      <Routes>
        <Route path='/' element={<AboutPage />} />
        <Route path='/articles' element={<ArticlesPage articles={articles}/>} />
        <Route path='/articles/:id' element={<MarkdownPost article={article} />} />
      </Routes>
    </>
  )
}

export default App

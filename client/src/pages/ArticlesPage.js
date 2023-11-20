import React, { useState, useEffect } from 'react'
import { Box, Container, CssBaseline } from '@mui/material'

import articleService from '../services/articles'
import ArticleCard from '../components/ArticleCard'

import logger from '../utils/logger'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    articleService.getAll()
      .then(articles => {
        setArticles(articles)
      })
      .catch(err => logger.error(err))
  }, [])


  return (<>
    <CssBaseline />
    <Box
      component='div'
      sx={{
        display: { sm: 'flex' },
        flexDirection: { sm: 'column' },
        alignItems: { sm: 'center' },
      }}
    >
      {articles.map(article => <ArticleCard key={article.id} article={article} />)}
    </Box>
  </>)
}

export default ArticlesPage

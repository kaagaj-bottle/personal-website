import React, { useState, useEffect } from 'react'
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
    {articles.map(article => <ArticleCard key={article.id} article={article} />)}
  </>)
}

export default ArticlesPage

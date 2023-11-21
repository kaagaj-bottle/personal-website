import React, { useState, useEffect } from 'react'
import { Box, Container, CssBaseline } from '@mui/material'

import articleService from '../services/articles'
import ArticleCard from '../components/ArticleCard'

import logger from '../utils/logger'
import { drawerWidth, styleObject } from '../utils/global_consts'

import { Link } from 'react-router-dom'
const ArticlesPage = ({articles}) => {
 
  return (<>
    <CssBaseline />
    <Box sx={styleObject}>
      <Box
        component='div'
        sx={{
          display: { sm: 'flex' },
          flexDirection: { sm: 'column' },
          alignItems: { sm: 'center' },


        }}
      >
        {articles.map(article => <ArticleCard key={article.id} article={article}/>)}
      </Box>
    </Box>
  </>)
}

export default ArticlesPage

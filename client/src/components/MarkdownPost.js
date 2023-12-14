import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
// import Markdown from 'markdown-to-jsx'
import { CssBaseline, Box } from '@mui/material'
import { drawerWidth, styleObject } from '../utils/global_consts'
import articleService from '../services/articles'
const MarkdownPost = ({ article }) => {

  const [content, setContent] = useState('')
  useEffect(() => {
    articleService.getOne(article.id).then((article) => {
      setContent(article.content)
      console.log(article, '1')
    })

  })
  return (
    <><Box sx={{
      marginLeft: { sm: `${drawerWidth}px` }
    }}>
      <Box># Header</Box>
    </Box>

    </>
  )


}

export default MarkdownPost

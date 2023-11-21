import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Markdown from 'markdown-to-jsx'
import { CssBaseline, Box } from '@mui/material'
import { drawerWidth, styleObject } from '../utils/global_consts'

const MarkdownPost=({article})=>{
  
  const [content,setContent]=useState('')
  useEffect(()=>{
    setContent(article.content)
  })
   
  return (
  <><Box sx={{
      marginLeft:{sm:`${drawerWidth}px`}
    }}>
      <Markdown>{content}</Markdown>
    </Box>

    </>
  )


}

export default MarkdownPost

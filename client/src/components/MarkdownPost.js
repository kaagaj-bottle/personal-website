import React from 'react'
import { useState, useEffect } from 'react'

import Markdown from 'markdown-to-jsx'
import { CssBaseline, Box } from '@mui/material'

const MarkdownPost=({content})=>{
  const [post,setPost]=useState(content)
   
  return (
  <>
      <Markdown>{post}</Markdown>
    </>
  )


}

export default MarkdownPost

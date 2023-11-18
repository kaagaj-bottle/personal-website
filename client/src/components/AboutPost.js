import React from 'react'
import { useState, useEffect } from 'react'

import Markdown from 'markdown-to-jsx'
import { CssBaseline, Box } from '@mui/material'

import aboutPagePicture from '../../asset/images/aboutPagePicture.png'

const AboutPost = () => {
  const [aboutPost, setAboutPost] = useState('')

  // this is just a temporary solution. the md file will probably be stored as some form of text in database which will be parsed for rendering in frontend
  useEffect(() => {
    import('../../asset/markdown/aboutPage.md')
      .then(response => {
        setAboutPost(response.default)
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <CssBaseline />
      <Box sx={{
        display: { sm: 'flex' },
      }}>
        <Box
          component='div'
          sx={{

            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Box
            component='img'
            src={aboutPagePicture} alt='my profile picture'
            sx={{
              display: 'flex',
              maxHeight: { xs: 350, sm: 200 }
            }}
          />
        </Box>

        <Box component='div' sx={{
          px: 5,
          fontSize: '0.9rem'
        }}>
          <Markdown options={{ wrapper: 'article' }}>{aboutPost}</Markdown>

        </Box>
      </Box >

    </>
  )

}

export default AboutPost;

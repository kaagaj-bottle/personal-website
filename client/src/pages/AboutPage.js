import React from 'react'
import { Box } from '@mui/material'
import AboutPost from '../components/AboutPost'
import { styleObject } from '../utils/global_consts'


const AboutPage = () => {
  return (<>
    <Box
      sx={styleObject}
    >
      <AboutPost />

    </Box>
  </>)
}

export default AboutPage

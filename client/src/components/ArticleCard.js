import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import MarkdownPost from './MarkdownPost';

import CatPicture from '../../asset/images/cat.jpg'
const ArticleCard = ({ article }) => {

  return (
    <>
      <Card sx={{
       
        position: 'static',
        my:'0.5rem'

      }}>


        <CardActionArea  component={Link}
          to={`/articles/${article.id}`} >
          <Box component='div' sx={{ display: { sm: 'flex' } }}>
            <CardMedia
              component="img"
              image={article.titleImageUrl}
              alt="green iguana"
              sx={{
                display: 'block',
                marginLeft: 'auto',
                marginRight: 'auto',
                width: '50%'
              }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.
              </Typography>
            </CardContent>

          </Box>
        </CardActionArea>
        {/* <CardActions> */}
        {/*   <Button size="small" color="primary"> */}
        {/*     Share */}
        {/*   </Button> */}
        {/* </CardActions> */}
      </Card>
    </>
  );
}

export default ArticleCard

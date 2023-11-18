import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import MarkdownPost from './MarkdownPost';

import CatPicture from '../../asset/images/cat.jpg'
const ArticleCard=({article})=> {
 
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={article.title_image} 
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {article.title}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary"> */}
          {/*    */}
          {/* </Typography> */}
        </CardContent>
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

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GlobalContext from '../context/GlobalContext';

export default function MediaCard({post}) {
  const {deletePost, setPost} = React.useContext(GlobalContext);

  return (
    <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image= "./assets/defaultPlaceholder.jpg"
        title="green iguana"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
            {post.thought}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>{setPost(post)}}>Edit</Button>
        <Button size="small" onClick={()=> deletePost(post._id)}>Delete</Button>
      </CardActions>
    </Card>
  );
}

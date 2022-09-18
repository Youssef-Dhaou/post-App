import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deletePost, verifiedPost } from '../../JS/actions/PostActions';


export default function BasicCard({post}) {
    const dispatch= useDispatch()
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Post title
        </Typography>
        <Typography variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Post Content
        </Typography>
        <Typography variant="body2">
          {post.content}
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
         <Link to={`/editpost/${post.id}`}> <Button size="small">Edit</Button></Link>
         <Button size="small"  onClick={()=> dispatch(deletePost(post.id))}>delete</Button>
         <Button size="small"  onClick={()=> dispatch(verifiedPost(post.id))}>{post.isVerified? "verified": "unVerified"}</Button>
      </CardActions>
    </Card>
  );
}

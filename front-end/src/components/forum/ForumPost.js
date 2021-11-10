import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import ForumPostComments from './ForumPostComments';
import ForumPostCommentForm from './ForumPostCommentForm';

export default function ForumPost({post}) {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, [post]);

  function getComments() {
    const instance = axios.create();
    instance.get(post._links.comments.href)
      .then((res) => {
        if (res.data._embedded) {
          setComments(res.data._embedded.comments)
        }
      });
  }


  function RenderComments() {
    if (comments && comments.length !== 0) {
      return (
        <ForumPostComments
          comments={comments} />
      )
    }
    return null;
  }

  return (
    <Box sx={{
      border: 1,
      borderRadius: 2,
      width: '70vw',
      padding: 10,
      margin: 10
    }}>
      <Typography variant="h2">
        {post.title}
      </Typography>
      <Typography>
        {post.content}
      </Typography>
      <RenderComments />
      <ForumPostCommentForm setComments={setComments} post={post} />
    </Box>
  )

}

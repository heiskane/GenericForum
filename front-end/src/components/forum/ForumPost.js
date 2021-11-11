import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import ForumPostComments from './ForumPostComments';
import ForumPostCommentForm from './ForumPostCommentForm';

export default function ForumPost({post, dispatch}) {

  const [comments, setComments] = useState([]);
  //const comments = useSelector(store => store);

  useEffect(() => {
    getComments();
  }, [post]);

  function getComments() {
    const instance = axios.create();
    instance.get(post._links.comments.href)
      .then((res) => {
        if (res.data._embedded) {
          /*
          for (let i = 0; i < res.data.length; i++ ) {
            dispatch.add_comment(res.data[i])
          }
          */
          setComments(res.data._embedded.comments.reverse())
        }
      });
  }

  function RenderComments() {
    if (comments && comments.length !== 0) {
      return (
        <ForumPostComments comments={comments} />
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
      <ForumPostCommentForm post={post} setComments={setComments} />
      <RenderComments />
    </Box>
  )

}

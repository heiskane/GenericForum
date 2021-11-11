import { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import axios from 'axios';
import CommentReplyForm from './CommentReplyForm';
import CommentDeleteButton from './CommentDeleteButton';

export default function ForumPostComment({comment, parentComment, iteration = 0}) {

  const [replies, setReplies] = useState([]);
  const [user, setUser] = useState();
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const instance = axios.create();
  
    instance.get(comment._links.replies.href)
      .then((res) => {
        setReplies(res.data._embedded.comments.reverse())
      })
      .catch((err) => {
        console.log(err)
      });

    instance.get(comment._links.user.href)
      .then((res) => {
        setUser(res.data)
      })
      .catch((err) => {
        console.log(err)
      });

  }, [comment])

  function RenderReplies() {
    if (replies.length !== 0) {
      return (
        <Box>
          {replies.map((reply, index) => 
            <ForumPostComment
              key={index}
              comment={reply}
              parentComment={comment}
              iteration={iteration + 1} />
          )}
        </Box>
      )
    }
    return null;
  }

  return (
    <Box>
      <Box sx={{
        border: 1,
        marginLeft: iteration * 4,
        marginTop: 1,
        padding: 1
      }}>
        <Typography>Sender: {user && user.name}</Typography>
        <Typography>
          Message: {comment.message}
        </Typography>
        { showForm ?
          (<CommentReplyForm
            comment={comment}
            setShowForm={setShowForm}
            setReplies={setReplies} />) :
          (
            <Button onClick={() => setShowForm(true)}>
              Reply
            </Button>
          )
        }
        <CommentDeleteButton comment={comment} />
      </Box>
      <RenderReplies />
    </Box>
  )

}

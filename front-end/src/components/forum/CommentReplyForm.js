import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import axios from 'axios';

export default function CommentReplyForm({comment, setShowForm, setReplies}) {

  const [reply, setReply] = useState();

  async function handleSubmit(event) {
    event.preventDefault();

    const instance = axios.create();
    var msg = await instance.post(`/comments/${comment.id}/replies`, {
      message: reply
    })
      .then((res) => {
        return res.data
      })

    instance.get(`/api/comments/${msg.id}`)
      .then((res) => {
        setShowForm(false);
        setReplies(replies => [...replies, res.data]);
      })
  }

  return (
    <Box>
      <Grid container>
        <Grid item>
          <TextField
            label="Reply"
            type="text"
            name="reply"
            required
            multiline
            maxRows={10}
            value={reply}
            onChange={e => setReply(e.target.value)}/>
          <Button onClick={handleSubmit}>
            Send
          </Button>
          <Button onClick={() => setShowForm(false)}>
            Cancel
          </Button>
        </Grid>
      </Grid>
    </Box>
  )

}
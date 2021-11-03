import { useState } from 'react';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import axios from 'axios';

export default function ForumPostCommentForm({post, refresh}) {

  const [message, setMessage] = useState();

  function handleSubmit(event) {
    event.preventDefault();
    const instance = axios.create();
    instance.post(`/comment/${post.id}`,{
      message: message
    })
      .then((res) => {
        console.log(res)
      });
    refresh();
  }

  return (
      <Box>
        <form
          onSubmit={handleSubmit}
        >
          <Grid
            container
            flexDirection='row' 
            justifyContent='flex-start'
            alignItems='center'
            padding={2}
            spacing={2}
          >
            <Grid item>
              <TextField
                label="Message"
                type="text"
                name="message"
                required
                multiline
                maxRows={10}
                value={message}
                onChange={e => setMessage(e.target.value)} />
            </Grid>

            <Grid item>
              <Button
                type="submit"
                variant="contained"
              >
                Comment
              </Button>
            </Grid>

          </Grid>
        </form>
      </Box>
  )

}
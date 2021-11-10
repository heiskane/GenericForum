import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';

export default function ForumPostForm({setPosts}) {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    
    const instance = axios.create();
    var post = await instance.post("/forumPosts", {
      title: title,
      content: content
    })
    .then((res) => {
      return res.data
    })

    instance.get(`/api/forumPosts/${post.id}`)
    .then((res) => {
      setPosts(posts => [res.data, ...posts])
    })
  }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          type="text"
          name="title"
          required
          value={title}
          onChange={e => setTitle(e.target.value)} />
        <TextField
          label="Content"
          type="text"
          name="content"
          required
          value={content}
          onChange={e => setContent(e.target.value)} />
        <Button type="submit" variant="contained">Post</Button>
      </form>
    </Box>
  )

}
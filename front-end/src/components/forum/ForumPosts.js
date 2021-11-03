import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import ForumPost from './ForumPost'

export default function ForumPosts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const instance = axios.create();
    instance.get("/api/forumPosts")
      .then((res) => {
        setPosts(res.data._embedded.forumPosts)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  if (!posts) return null;

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Grid item xs={8}>
        {posts.map((post, index) =>
          <ForumPost key={index} post={post} />
        )}
      </Grid>
    </Grid>
  )

}
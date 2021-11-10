import { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';

import ForumPost from './ForumPost';
import ForumPostForm from './ForumPostForm';

export default function ForumPosts() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const instance = axios.create();
    instance.get("/api/forumPosts")
      .then((res) => {
        let posts = res.data._embedded.forumPosts
        setPosts(posts.reverse())
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
    <ForumPostForm setPosts={setPosts} />
      <Grid item xs={8}>
        {posts.map((post, index) =>
          <ForumPost key={index} post={post} />
        )}
      </Grid>
    </Grid>
  )

}
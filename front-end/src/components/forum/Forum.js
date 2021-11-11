import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ForumPosts from './ForumPosts'
import { Redirect } from 'react-router-dom';

export default function Forum({username}) {

  return !username ? (
    <Redirect to="/login" />
    ) : (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Typography variant="h2">Posts</Typography>
      <ForumPosts />
    </Box>
  )

}
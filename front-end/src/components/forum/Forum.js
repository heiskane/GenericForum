import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ForumPosts from './ForumPosts'

export default function Forum() {

  return (
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
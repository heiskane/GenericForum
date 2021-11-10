import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import ForumPostComment from './ForumPostComment'

export default function ForumPostsComments({comments}) {

  return (
    <Box>
      <Typography variant="h3">Comments</Typography>
        {comments.map((comment, index) =>
          <ForumPostComment
            key={index}
            comment={comment} />
        )}
    </Box>
  )

}
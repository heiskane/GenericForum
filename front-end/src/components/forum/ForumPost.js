import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ForumPost({post}) {

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
		</Box>
	)

}

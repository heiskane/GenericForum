import Button from '@mui/material/Button';
import axios from 'axios';
export default function CommentDeleteButton({deleteComment, comment}) {

  function deleteCommentFunc(event) {
    event.preventDefault();

    const instance = axios.create();
    instance.delete(comment._links.self.href)
      .then((res) => {
        //setShowComment(false)
        //deleteComment(comment)
        console.log("fml")
      })
  }

  return (
    <Button onClick={deleteCommentFunc}>Delete</Button>
  )

}
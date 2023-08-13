import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios';
import { useState } from 'react';
const ShowComments = (props) => {
    console.log(props.comment.post[0].user.name);
    const comments = props.comment.comments;
    const [setDeleteComment] = useState(false);

    const handleDelete = (key) => {
       axios.delete(`https://drab-jay-getup.cyclic.app/comment/${key}`)
       .then((response) => {
           console.log("comment deleted");
           console.log(response);
           setDeleteComment(true);
        window.location.reload(false);
       }).catch((e) => {
           console.log(e);
       })
    }
    return ( 
        <div className="allComments my-2">
            {  JSON.parse(window.localStorage.user).name === props.comment.post[0].user.name ? 
                <div className="deleteComments">
                    {comments.map((comment) => (  
                <div className="eachComments mx-2 px-2  py-2 my-4 w-50" key={comment.id}>
                    {comment.user.name} : {comment.body} <button className='deleteComment' value={comment.id} onClick={() => {
                        handleDelete(comment.id);
                    }}><i className="bi bi-trash-fill"></i></button>
                </div> 
        )) }
                    </div> 
                    :
                    <div className="deleteComments">
                    {comments.map((comment) => (  
                        <div className="eachComments mx-2 px-2  py-2 my-4 w-50" key={comment.id}>
                           {comment.user.name} - {comment.body}
                        </div> 
                )) }
                </div>
            }
        </div>
     );
}
 
export default ShowComments;

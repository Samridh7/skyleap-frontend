import axios from "axios";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import ShowComments from "./showComments";
const PostDetail = (props) => {
    console.log(props.posts);
    const posts = props.posts.post;
    const comments = props.posts;
    const [comment, setComment] = useState('');
    console.log(posts);
    console.log(posts[0].id);
    console.log(JSON.parse(window.localStorage.user).name);
    const history = useHistory();
    const handleDelete = () => {
        axios.delete(`https://drab-jay-getup.cyclic.app/${posts[0].id}`).then((response) => {
              console.log(response);
              history.push("/home")
        }).catch((e) => {
            console.log(e)
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('https://drab-jay-getup.cyclic.app/comment', {
           userId: JSON.parse(window.localStorage.user).id,
           postId: posts[0].id,
           title: JSON.parse(window.localStorage.user).name,
           body: comment
        }).then(() => {
            console.log("new comment added");
            setComment('');
            window.location.reload(false);

        }).catch((e) => {
            console.log(e);
        })
    }
    return ( 
        <div className="postDetails">
            {posts.map((post) => (  
            <div className="post-detailed-preview my-4" key={post.id}>
                <h2 className="text-primary my-4">{post.title}</h2>
                <p className="text-muted">{post.user.name}</p>
                <div className="my-4">
                    {post.body}
                </div>

                <div className="comments py-2">
                    {JSON.parse(window.localStorage.user).name === post.user.name?
                    <div className="container">
                    <a className="mx-4 px-4" href=""><i className="bi bi-chat-left-dots-fill"></i> comment  </a>
                     <button className='btn btn-primary px-4 rounded-pill mx-4 px-4' onClick={handleDelete}>Delete   <i className='deletePost' class="bi bi-trash-fill"></i></button>
                    </div>
                    :
                    <a href=""><i className="bi bi-chat-left-dots-fill"></i> comment </a>
                    }
                </div>

                <form className="comment-section my-4" onSubmit={handleSubmit}>
                <label htmlFor="comment" className="col-sm-2 col-form-label">{JSON.parse(window.localStorage.user).name} :</label>
                    <input className="comment-tag px-2 py-1 w-75" type="text" required value={comment} onChange = {(e) => {setComment(e.target.value)}} placeholder="Write a comment...." />
                    <button className="submit-comment"><i class="bi bi-arrow-right-circle-fill"></i></button>
                </form>
                {<ShowComments comment={comments}></ShowComments>}
            </div>
        ))}
        </div>
     );
}
 
export default PostDetail;

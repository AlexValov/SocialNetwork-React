import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} />
        );
        
    let newPostElement = React.createRef();
    
    let addPost = () => {
        let text = newPostElement.current.value;
        alert(text)
    };
    
    return (
        <div>
            <div>my posts</div>
            <textarea ref={newPostElement}> </textarea>
            <div>
                <button onClick={addPost} >Add Post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} />
        );
        
    let newPostElement = React.createRef();
    
    let addMessage = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        props.updateNewPostText('');

    };
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
            props.updateNewPostText(text)
            
    }
    
    return (
        <div>
            <div>my posts</div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.tex}></textarea>
            
            <div>
                <button onClick={addMessage} >Add Post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
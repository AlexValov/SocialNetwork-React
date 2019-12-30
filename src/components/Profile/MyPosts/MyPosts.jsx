import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

const MyPosts = (props) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} />
        );
        
    let newPostElement = React.createRef();
    
    let addPost = () => {
        props.dispatch (addPostActionCreator());
    };
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text))
    };
    
    return (
        <div>
            <div>my posts</div>
            <textarea onChange={onPostChange} ref={newPostElement} value={props.tex}></textarea>
            
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
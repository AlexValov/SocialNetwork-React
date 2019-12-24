import React from 'react';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postElements = props.posts
        .map(post => <Post message={post.message} likeCount={post.likeCount} />
        );
        
    return (
        <div>
            <div>my posts</div>
            <textarea> </textarea>
            <div>
                <button>Add Post</button>
            </div>
            <div>
                {postElements}
            </div>
        </div>
    )
};

export default MyPosts;
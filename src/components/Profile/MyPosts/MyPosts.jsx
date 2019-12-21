import React from "react";
import style from "./MyPosts.module.css";
import Post from './Post/Post';


const MyPosts = () => {
    return (
        <div>
            <div >my posts</div>
            <textarea> </textarea>
            <div>
                <button>Add Post</button>
            </div>
            <div>
                <Post message="Hi" likeCount="2"/>
                <Post message="How are you?" likesCount="30"/>
                <Post message="I'm fine!" likesCount="11"/>
            </div>
        </div>
    );
};

export default MyPosts;
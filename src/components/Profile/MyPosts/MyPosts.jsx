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
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
};

export default MyPosts;
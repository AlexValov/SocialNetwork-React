import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'




const Profile = (props) => {
    console.log(props)
    return (
        <div>
            <ProfileInfo />
            <div className={style.postContent}>
                <MyPosts 
                posts={props.profilePage.posts}  
                tex={props.profilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText} />
            </div>
        </div>
    );
};

export default Profile;
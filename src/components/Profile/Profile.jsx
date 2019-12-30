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
                dispatch={props.dispatch} />
            </div>
        </div>
    );
};

export default Profile;
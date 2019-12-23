import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            <div className={style.postContent}>
                <MyPosts />
            </div>
        </div>
    );
};

export default Profile;
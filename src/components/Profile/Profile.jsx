import React from 'react';
import style from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
    return (
        <div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/AlsterPanorama.jpg/900px-AlsterPanorama.jpg" />
            </div>
          <div  className={style.postContent}>
              <MyPosts />
          </div>
        </div>
    );
};

export default Profile;
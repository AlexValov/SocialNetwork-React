import React from 'react';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.posts}>
                <div className={style.item}>
                    <img src="data:image/jpeg;base64,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"></img>
                    {props.message}
                </div>
                <div>
                    <img className={style.like} src="data:image/png;base64,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" />
                    {props.likeCount}
                </div>
            </div>
        </div>
    );
};

export default Post;


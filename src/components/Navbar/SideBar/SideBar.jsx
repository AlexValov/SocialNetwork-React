import React from 'react';
import style from './SideBar.module.css';

const SideBar = (props) => {
    console.log(props)
    return (
        <div className={style.sidebar}>
            <h2>Друзья</h2>
            <div className={style.items}>
                <div className={style.friendItem}>
                    <img src={props.state.dialogs[0].avatar}></img>
                    <div>{props.state.dialogs[0].name}</div>
                </div>
                <div className={style.friendItem}>
                    <img src={props.state.dialogs[1].avatar}></img>
                    <div>{props.state.dialogs[1].name}</div>
                </div>
                <div className={style.friendItem}>
                    <img src={props.state.dialogs[3].avatar}></img>
                    <div>{props.state.dialogs[3].name}</div>
                </div>

                <div></div>
                <div></div>
            </div>
        </div>
    )
};

export default SideBar;
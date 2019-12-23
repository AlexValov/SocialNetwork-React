import React from 'react'
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}> {props.name} </NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={style.message}>
            {props.message}
        </div>
    )
};


const Dialogs = () => {
    return (
        <div>
            <div>
                <DialogItem name='Max' id='1' />
                <DialogItem name='Oleg' id='2' />
                <DialogItem name='Misha' id='3' />
                <DialogItem name='Kola' id='4' />
            </div>
            <div>
                <Message message='Hi' />
                <Message message='Privet' />
                <Message message='Gutten Tag!' />
            </div>
        </div >
    )
};

export default Dialogs;
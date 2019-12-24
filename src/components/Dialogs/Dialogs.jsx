import React from 'react'
import style from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />
        );

    let messagesElements = props.messages
        .map(message => <Message message={message.message} />
        ); 

    return (
        <div>
            <div>
                {dialogsElements}
            </div>
            <div>
                {messagesElements}
            </div>
        </div >
    )
};


export default Dialogs;
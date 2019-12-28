import React from 'react'
import style from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs
        .map(dialog => <DialogItem avatar={dialog.avatar} name={dialog.name} id={dialog.id} />
        );

    let messagesElements = props.state.messages
        .map(message => <Message message={message.message} />
        );

    let addElement = React.createRef();

    let addMessage = () => {
        let text = addElement.current.value;
        props.addPost(text)
    };

    return (
        <div className={style.dialogs}>
            <div>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>
                    {messagesElements}
                </div>
                <div className={style.add_message}>
                    <textarea ref={addElement}></textarea>

                    <div><button onClick={addMessage}>Add message</button></div>
                </div>
            </div>
        </div >
    )
};

export default Dialogs;
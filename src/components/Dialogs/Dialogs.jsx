import React from 'react'
import style from './Dialogs.module.css'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Коля
                </div>
                <div className={style.dialog}>
                    Вася
                </div>
                <div className={style.dialog}>
                    Петя
                </div>
                <div className={style.dialog}>
                    Дима
                </div>
            </div>

            <div className={style.messages}>
                <div className={style.message}>
                    Привет
                </div>
                <div className={style.message}>
                    !!!!!!
                </div>
                <div className={style.message}>
                    how are you?
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
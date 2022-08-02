import React from 'react'
import {MessageType} from "./HW1";
import s from './Message.module.css';

function Message(props: MessageType) {

    return (
        <div className={s.message}>
            <img src={props.avatar} alt=""/>
            <div className={s.message_wrap}>
                <div className={s.name}>{props.name}</div>
                <div className={s.messageData}>{props.message}</div>
                <div className={s.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message

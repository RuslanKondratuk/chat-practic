import React, { useEffect, useRef } from 'react';
import styles from './Chat.module.css'
import Message from './Message';

const Chat = (props) => {
    const messageEndRef = useRef(null);

    const scrollToBottom = () => {
        messageEndRef.current.scrollIntoView({behavior:'smooth'})
    }

    useEffect (() => {
        scrollToBottom()
    }, [props.message])


    return (
        <div className={styles.container}>
        {props.message.map((obj) => {
            return <Message key = {obj.id} message={obj}/>
        })}
        <div ref={messageEndRef}></div>
        </div>
    );
}

export default Chat;

import React, { useState } from 'react';
import styles from './MessageArea.module.css'

const MessageArea = (props) => {
    const [textMessage, setTextMessage] = useState('')

    const handlerText = ({target: {value}}) => {
        setTextMessage(value)
    }

    const messageSubmit = (event) => {
        event.preventDefault();
        if (textMessage) {
            props.sendMessage(textMessage);
            setTextMessage('')
        }
    }

    const keyEnter = (event) => {
        if (event.key === 'Enter') {
            messageSubmit(event)
        }
    }
    return (
        <div className={styles.container}>
        <form  onSubmit={messageSubmit} className={styles['wrapper-area']}>
            <textarea
                value={textMessage}
                onChange={handlerText}
                className={styles.input}
                onKeyDown={keyEnter}
            />
            <button type='submit' className={styles.button}>&#10148;</button>
        </form>

        </div>
    );
}

export default MessageArea;

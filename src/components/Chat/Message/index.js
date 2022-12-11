import React, { useContext } from 'react';
import styles from '../Chat.module.css'
import format from 'date-fns/format';
import { UserContext } from '../../../context/UserContext';

const Message = (props) => {
    const value = useContext(UserContext)
    const {message: {body, id, postId, date, user : {username, imageSrc}}} = props

    const imgSrc = imageSrc ? imageSrc : './userPlaceholder.jpeg';
    const messageDate = date ? date : new Date();
    const cn = username !== value.username ? styles['container-message'] : styles['container-my-message']
    return (
        <section className= {cn}>
            <img src={imgSrc} alt={id} className={styles.avatar}/>
            <div className= {styles['container-text']}>
                <span className={styles.name}>{username}</span>
                <span className={styles['message-text']}>{body}</span>
                <span className={styles.date}>{format(messageDate, 'H:mm:ss')}</span>
            </div>

        </section>
    );
}

export default Message;

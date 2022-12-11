import React, { useEffect, useReducer, useState } from 'react';
import Chat from '../Chat';
import DialogList from '../DialogList';
import MessageArea from '../MessageArea';
import { getMessages } from '../../api/getMessages';
import {UserContext} from '../../context/UserContext'
import styles from './DashBoard.module.css'
import {reducer} from '../../reducer/messangerReducer'






const DashBoard = () => {
    const [users, setUsers] = useState({
                                        id: '1',
                                        username: 'John Doe',
                                        imageSrc: './placeholder.jpg'
                                        })

    const [state, dispatch] = useReducer(reducer, {
                                            message: [],
                                            error: null
                                                    })

    useEffect (()=>{
        getMessages()
            .then (data => {
                const action = {
                    type: 'DATA_LOAD_SUCCESS',
                    data
                }
                dispatch(action)
            })
            .catch (error => {
                const action = {
                    type: 'DATA_LOAD_ERROR',
                    error
                }
                dispatch(action)
            })
        }, []
    )

    const sendMessage = (message) => {
        const newMessageFromMe = {
            body: message,
            id: state.message.length+1,
            user: users
        }

        const action = {
            type: 'SEND_NEW_MESSAGE',
            newMessageFromMe
        }
        dispatch(action)
    }
    return (
        <UserContext.Provider value = {users}>
        <main className={styles.container}>
            {state.error && <div>Ooops! Error Happening!!!</div>}
            <DialogList/>
            <div className={styles['chat-wrapper']}>
                <Chat message={state.message}/>
                <MessageArea sendMessage = {sendMessage}/>
            </div>
        </main>
        </UserContext.Provider>
    );
}

export default DashBoard;

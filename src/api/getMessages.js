const API_BASE = 'https://dummyjson.com/comments';

export const getMessages = ()=> {
    return fetch(API_BASE).then(res => res.json())
}
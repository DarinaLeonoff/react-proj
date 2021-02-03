import { RSAA, getJSON } from 'redux-api-middleware';

export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessage = (message, author, chatId) => ({
    type: SEND_MESSAGE,
    message,
    author,
    chatId
});

export const START_MESSAGES_LOADING = 'START_MESSAGES_LOADING';
export const SUCCESS_MESSAGES_LOADING = 'SUCCESS_MESSAGES_LOADING';
export const ERROR_MESSAGES_LOADING = 'ERROR_MESSAGES_LOADING';

// export const loadMessages = () => ({
//     [RSAA]: {
//         endpoint
//     }
// })
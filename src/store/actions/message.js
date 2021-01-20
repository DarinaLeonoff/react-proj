export const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMesssage = (message, author, chatId) => ({
    type: SEND_MESSAGE,
    message,
    author,
    chatId
}); 
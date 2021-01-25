import { SEND_MESSAGE } from "../actions/message";

const initState = [
    { message: 'hi! You are in 1st chat.', author: 'bot', id: 0 },
    { message: 'hi! You are in 2nd chat.', author: 'bot', id: 1 },
    { message: 'i will not answer, but you can ask...', author: 'bot', id: 2 }
];

function messagesReducer(store = initState, action) {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMesId = store.length;
            return [...store, { message: action.message, author: action.author, id: newMesId, chatId: action.chatId }];
        default:
            return store;
    }

}
export default messagesReducer;
import { SEND_MESSAGE } from "../actions/message";

const initState = [
    { message: 'hi! You are in 1st chat.', author: 'bot', id: 0 },
    { message: 'hi! You are in 2nd chat.', author: 'bot', id: 1 }
];

function messagesReducer(store = initState, action) {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMesId = this.state.messages.length;
            return [...store, { message: action.message, author: message.author, id: newMesId, chatId: action.chatId }];
        default:
            return store;
    }

}
export default messagesReducer;
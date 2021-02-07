import { ERROR_CHATS_LOADING, START_CHATS_LOADING, SUCCESS_CHATS_LOADING } from '../actions/chat';
import { SEND_MESSAGE, SET_MESSAGES, START_MESSAGES_LOADING, SUCCESS_MESSAGES_LOADING, ERROR_MESSAGES_LOADING } from "../actions/message";

const initState = [
    { message: 'hi! You are in 1st chat.', author: 'bot', id: 0 },
    { message: 'hi! You are in 2nd chat.', author: 'bot', id: 1 },
    { message: 'i will not answer, but you can ask...', author: 'bot', id: 2 }
];

export default function messagesReducer(store = initState, action) {

    switch (action.type) {
        case SEND_MESSAGE:
            const newMesId = store.length;
            return [...store, { message: action.message, author: action.author, id: newMesId, chatId: action.chatId }];
        case SET_MESSAGES:
            return [...action.messages];
        case SUCCESS_MESSAGES_LOADING:
            let chats = {};
            let messages = [];
            let response = action.payload;
            for (let id in response) {
                chats[parseInt(id)] = {
                    name: response[id].name,
                    messages: [...response[id].messages.map(item => parseInt(item.id))]
                };
                messages.push(...response[id].messages.map(item => ({ ...item, id: parseInt(item.id) })));
            }
            return [...messages];
        case SUCCESS_CHATS_LOADING:
            return [...action.payload.entities.messages];
        case START_MESSAGES_LOADING:
        case ERROR_MESSAGES_LOADING:
        case START_CHATS_LOADING:
        case ERROR_CHATS_LOADING:
        default:
            return store;
    }

}

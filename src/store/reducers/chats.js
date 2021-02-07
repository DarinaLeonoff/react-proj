import { SUCCESS_CHATS_LOADING, START_CHATS_LOADING, ERROR_CHATS_LOADING } from '../actions/chat';

const initChats = {
    1: {
        name: 'Chat 1',
        messages: [0, 2]
    },
    2: {
        name: 'Chat 2',
        messages: [1, 2]
    }
}

function chatReducer(store = initChats, action) {

    switch (action.type) {
        case SUCCESS_CHATS_LOADING:
            return [...action.payload.entities.chats];
        case START_CHATS_LOADING:
        case ERROR_CHATS_LOADING:
        default:
            return store;
    }

}
export default chatReducer;
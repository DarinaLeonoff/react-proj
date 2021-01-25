import { CHAT } from '../actions/chat';

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
        case CHAT:
            console.log('its ok');
            return;
        default:
            return store;
    }

}
export default chatReducer;
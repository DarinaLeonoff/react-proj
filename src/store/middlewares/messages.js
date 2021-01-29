import { SEND_MESSAGE, sendMessage } from '../actions/message';

export default store => next => action => {
    // debugger;
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.author === 'me') {
                console.log('need send');
                setTimeout(
                    () => store.dispatch(sendMessage('i am robot', 'bot', action.chatId)),
                    1000);
                // () => console.log('i am robot ' + 'bot' + action.chatId),
                // 1000);
            }
            break;
    }
    return next(action);
};
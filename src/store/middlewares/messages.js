import { SEND_MESSAGE, sendMessage } from '../actions/message';

export default store => next => action => {
    // debugger;
    console.log(action);
    switch (action.type) {
        case SEND_MESSAGE:
            if (action.author === 'me') {
                // debugger;
                setTimeout(
                    () => {
                        store.dispatch(sendMessage('i am robot', 'bot', action.chatId));
                        console.log('need send');
                    },
                    5000);
                // () => console.log('i am robot ' + 'bot' + action.chatId),
                // 1000);
            }
    }
    return next(action);
};
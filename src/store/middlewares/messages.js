import { SEND_MESSAGE, sendMesssage } from '../actions/message'


export default store => next => action => {

    const dispatch = store.dispatch;

    switch (action.type) {
        case SEND_MESSAGE:
            if (action.author === 'me') {
                console.log('need send');
                setTimeout(
                    () => {
                        dispatch(sendMesssage('i\'m robot', 'bot', action.chatId));
                    }, 1000
                );
            };
            break;
    }
    return next(action);
};
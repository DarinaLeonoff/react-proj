import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import messageReducer from './messages';
import chatReducer from './chats';

export default history => combineReducers({
    router: connectRouter(history),
    messageReducer,
    chats: chatReducer
});
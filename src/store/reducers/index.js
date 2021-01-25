import { combineReducers } from 'redux';
import messageReducer from './messages';
import chatReducer from './chats';

export default combineReducers({
    messageReducer,
    chats: chatReducer
});
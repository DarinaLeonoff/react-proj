import React from 'react';
import PropTypes from 'prop-types';
import Menu from './menu';
import '../styles/chatlist.css';



export default class ChatList extends React.Component {
    static propTypes = {
        // chats: PropTypes.object.isRequired,
        chatId: PropTypes.number,
    };

    render() {
        return <div className="menu">
            <Menu />
        </div>
    }
};


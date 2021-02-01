import React from 'react';
import PropTypes from 'prop-types';
import Menu from './menu';
import '../styles/chatlist.css';
import { bindActionCreators } from 'redux';


export default class ChatList extends React.Component {
    static propTypes = {
        chats: PropTypes.object.isRequired,
        addChats: PropTypes.func.isRequired,

    };

    render() {
        return <div className="menu">
            <Menu />
        </div>
    }
};


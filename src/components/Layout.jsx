import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import ChatList from './ChatList';
import Messages from './pages/Messages';


import '../styles/layout.css';

export default class Layout extends React.Component {
    state = {
        messages: [
            { message: 'hi! You are in 1st chat.', author: 'bot' },
            { message: 'hi! You are in 2nd chat.', author: 'bot' }
        ],
        chats: {
            1: {
                name: 'chat 1',
                messages: [0]
            },
            2: {
                name: 'chat 2',
                messages: [1]

            }
        }
    };

    static propTypes = {
        chatId: PropTypes.number,
        messages: PropTypes.array,
        title: PropTypes.string,
        messField: PropTypes.string
    };

    static defaultProps = {
        chatId: 1,
        messages: [],
        title: 'My chat',
        messField: 'visible'
    };

    render() {
        return <>
            <Header chatId={this.props.chatId} title={this.props.title} />
            <main>
                <ChatList />
                <Messages chatId={this.props.chatId} messages={this.props.messages} messField={this.props.messField} />
            </main>
        </>;
    };
};
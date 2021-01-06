import React from 'react';
import PropTypes from 'prop-types';

import Header from './Header';
import MessageList from './message-list';
import ChatList from './ChatList';

import '../styles/layout.css';

export default class Layout extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        messages: PropTypes.array,
        title: PropTypes.string
    };

    static defaultProps = {
        chatId: 1,
        messages: []
    };

    render() {
        return <><Header chatId={this.props.chatId} />
            <main>
                <ChatList />
                <MessageList messages={this.props.messages} chatId={this.props.chatId} title={this.props.title} />
            </main></>;
    };
};
import React from 'react';

import Header from './Header';
import MessageList from './message-list';
import ChatList from './ChatList';

import '../styles/layout.css';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <><Header />
            <main>
                <ChatList />
                <MessageList messages={this.props.messages} />
            </main></>;
    }
}
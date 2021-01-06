import React from 'react';
import PropTypes from 'prop-types';

import '../styles/MessageList.css';

import Message from './message';

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array,
        chatId: PropTypes.number.isRequired
    };

    static defaultProps = {
        messages: [],
        chatId: 1
    };

    state = {

    };

    render() {
        return <div className={'messages'}>
            {this.props.messages.map(({ message, author }, id) => <><Message message={message} author={author} key={`message_${id}`} /><br /><br /></>)}
        </div>;
    }
}
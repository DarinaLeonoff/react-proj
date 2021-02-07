import React from 'react';
import PropTypes from 'prop-types';

import '../styles/MessageList.css';

import Message from './message';

export default class MessageList extends React.Component {
    static propTypes = {
        messages: PropTypes.array,
        chatId: PropTypes.number.isRequired,
        title: PropTypes.string
    };

    static defaultProps = {
        messages: [],
        chatId: 1
    };

    state = {

    };

    render() {
        return <div className={'messages'}>
            <h2>{this.props.title}</h2>
            {this.props.messages.map(({ message, author }, id) => <><Message message={message} author={author} key={`message_${id}`} /><br /><br /></>)}
        </div>;
    }
}
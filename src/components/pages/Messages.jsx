import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageList from '../message-list';
import SendMessage from '../send';

import '../../styles/messages.css';
import { sendMesssage } from '../../store/actions/message';

class Messages extends React.Component {
    state = {
        messages: [
            { message: 'hi! You are in 1st chat.', author: 'bot', id: 0 },
            { message: 'hi! You are in 2nd chat.', author: 'bot', id: 1 }
        ],
        chats: {
            1: {
                name: 'Chat 1',
                messages: [0]
            },
            2: {
                name: 'Chat 2',
                messages: [1]
            }
        }
    };

    static propTypes = {
        chatId: PropTypes.number,
        messField: PropTypes.string
    };

    static defaultProps = {
        chatId: 1,
        messField: 'visible'
    };

    send = objMsg => {
        const newMesId = this.state.messages.length;
        this.setState({ messages: [...this.state.messages, { ...objMsg, id: newMesId }] });
        this.props.sendMesssage(...objMsg, this.props.chatId);
        const chats = { ...this.state.chats };
        chats[this.props.chatId].messages.push(newMesId);
        this.setState({ chats: { ...chats } });
    };

    render() {
        return <div className="messanger" >
            <div className={this.props.messField}>
                <MessageList messages={this.props.messagesStore.filter(({ id }) => this.state.chats[this.props.chatId].messages.includes(id))} title={this.props.title} />
                <SendMessage send={this.send} />
            </div>
        </div>;
    }
}

const mapStateToProps = store => ({
    messagesStore: store.messageReducer
});

const mapDispatchToProps = {
    sendMesssage: sendMesssage
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageList from '../message-list';
import SendMessage from '../send';

import '../../styles/messages.css';
import { sendMessage } from '../../store/actions/message';


class Messages extends React.Component {
    state = {
        messages: [
            { message: 'hi! You are in 1st chat.', author: 'bot', id: 0 },
            { message: 'hi! You are in 2nd chat.', author: 'bot', id: 1 },
            { message: 'i will not answer, but you can ask...', author: 'bot', id: 2 }
        ],
        chats: {
            1: {
                name: 'Chat 1',
                messages: [0, 2]
            },
            2: {
                name: 'Chat 2',
                messages: [1, 2]
            }
        }
    };

    static propTypes = {
        chatId: PropTypes.number,
        messField: PropTypes.string
    };

    static defaultProps = {
        chatId: 1
    };

    send = objMsg => {
        const newMesId = this.state.messages.length;
        this.setState({ messages: [...this.state.messages, { ...objMsg, id: newMesId }] });

        this.props.sendMessage(objMsg.message, objMsg.author, this.props.chatId);

        const chats = { ...this.props.chatStore };
        chats[this.props.chatId].messages.push(newMesId);
        this.setState({ chats: { ...chats } });
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.messagesStore.length < this.props.messagesStore.length &&
    //         this.props.messagesStore[this.props.messagesStore.length - 1].author === 'me') {
    //         setTimeout(
    //             () => this.send({ message: 'I\'m robot', author: 'bot' }),
    //             1000);
    //     }
    // }

    render() {
        return <div className="messanger" >
            <div>
                <MessageList messages={this.props.messagesStore.filter(({ id }) => this.props.chatStore[this.props.chatId].messages.includes(id))} />
                <SendMessage send={this.send} />
            </div>
        </div>;
    }
}

const mapStateToProps = store => ({
    messagesStore: store.messageReducer,
    chatStore: store.chats
});

const mapDispatchToProps = {
    sendMessage: sendMessage
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
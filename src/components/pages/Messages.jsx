import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import MessageList from '../message-list';
import SendMessage from '../send';

import '../../styles/messages.css';
import { sendMessage, setMessages, loadMessages } from '../../store/actions/message';
import { loadChats } from '../../store/actions/chat'


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

        const chats = { ...this.state.chats };
        chats[this.props.chatId].messages.push(newMesId);
        this.setState({ chats: { ...chats } });
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevProps.messagesStore.length < this.props.messagesStore.length &&
    //         this.props.messagesStore[this.props.messagesStore.length - 1].author === 'me') {
    //         setTimeout(
    //             () => this.send({ message: 'I\'m robot', author: 'bot' }),
    //             5000
    //         );
    //     }
    // }

    componentDidMount() {
        this.props.loadChats();
        // fetch('api/chats.json').then(response => response.json()).then(response => {
        //     console.log('response', response);

        //     let chats = {};
        //     let messages = [];

        //     for (let id in response) {
        //         chats[parseInt(id)] = {
        //             name: response[id].name,
        //             messages: [...response[id].messages.map(item => parseInt(item.id))]
        //         };
        //         messages.push(...response[id].messages.map(item => ({ ...item, id: parseInt(item.id) })));
        //     }
        //     this.props.setMessages(messages);
        //     this.setState({ chats: { ...chats } });

        // }).catch(err => console.log('err', err));

        // (async () => {
        //     try {
        //         let response = await fetch('api/chats.json'); //чтобы response возвращал значение, а не функцию. первый then
        //         response = await response.json(); // второй then
        //         for (let id in response) {
        //             chats[parseInt(id)] = {
        //                 name: response[id].name,
        //                 messages: [...response[id].messages.map(item => parseInt(item.id))]
        //             };
        //             messages.push(...response[id].messages.map(item => ({ ...item, id: parseInt(item.id) })));
        //         };
        //         this.props.setMessages(messages);
        //         this.setState({ chats: { ...chats } });
        //     }
        //     catch (e) {
        //         console.log('try -> chatch', e);
        //     }
        // })();
    };

    render() {
        return <div className="messanger" >
            <div>
                <MessageList messages={this.props.messagesStore.filter(({ id }) => this.state.chats[this.props.chatId].messages.includes(id))} />
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
    sendMessage: sendMessage,
    setMessages: setMessages,
    loadMessages: loadMessages,
    loadChats: loadChats
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);
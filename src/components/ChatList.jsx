import React from 'react';

import { List } from 'material-ui';
import { ListItem } from 'material-ui';

import '../styles/chatlist.css';

export default class ChatList extends React.Component {
    render() {
        return <List name={'chats'}>
            <ListItem name={'chat'}>
                <div className={'block'}>
                    <div className={'chat-foto'}></div>
                    <p className={'chat-name'}>Bot1</p>
                </div>
            </ListItem>
            <ListItem name={'chat'}>
                <div className={'block'}>
                    <div className={'chat-foto'}></div>
                    <p className={'chat-name'}>Bot2</p>
                </div>
            </ListItem>
            <ListItem name={'chat'}>
                <div className={'block'}>
                    <div className={'chat-foto'}></div>
                    <p className={'chat-name'}>Bot3</p>
                </div>
            </ListItem>
            <ListItem name={'chat'}>
                <div className={'block'}>
                    <div className={'chat-foto'}></div>
                    <p className={'chat-name'}>Bot4</p>
                </div>
            </ListItem>
            <ListItem name={'chat'}>
                <div className={'block'}>
                    <div className={'chat-foto'}></div>
                    <p className={'chat-name'}>Bot5</p>
                </div>
            </ListItem>

        </List>;
    }
};
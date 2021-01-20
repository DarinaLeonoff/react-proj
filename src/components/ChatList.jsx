import React from 'react';
import { Link } from 'react-router-dom';

import { List } from 'material-ui';
import { ListItem } from 'material-ui';


import '../styles/chatlist.css';

export default class ChatList extends React.Component {
    render() {
        return <List className={'chats'}>
            <Link to='/chat/1'>
                <ListItem name={'chat'}>
                    <div className={'block'}>
                        <div className={'chat-foto'}></div>
                        <p className={'chat-name'}>Bot1</p>
                    </div>
                </ListItem>
            </Link>
            <Link to='/chat/2'>
                <ListItem name={'chat'}>
                    <div className={'block'}>
                        <div className={'chat-foto'}></div>
                        <p className={'chat-name'}>Bot2</p>
                    </div>
                </ListItem>
            </Link>
        </List>;
    }
};
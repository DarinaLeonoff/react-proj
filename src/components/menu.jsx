import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';

import '../styles/chatlist.css';

class Menu extends React.Component {
    render() {
        return <div className={'chats'}>
            <div onClick={this.props.push('/chat/1')} className={'block'}>
                <div className={'chat-foto'}></div>
                <p className={'chat-name'}>Bot1</p>
            </div>
            <div onClick={this.props.push('/chat/2')} className={'block'}>
                <div className={'chat-foto'}></div>
                <p className={'chat-name'}>Bot2</p>
            </div>
        </div >;
    };
};

const mapStateToProps = store => ({});
const mapDispatchToProps = {
    push
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
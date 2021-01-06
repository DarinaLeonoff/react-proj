import React from 'react';
import PropTypes from 'prop-types';

import '../styles/Header.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number
    };
    static defaultProps = {
        chatId: 1
    };

    render() {
        return <div className='header'>
            <div className='container'>
                <h1> My chat {this.props.chatId}</h1>
            </div>
        </div>;
    };
}
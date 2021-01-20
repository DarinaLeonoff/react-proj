import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


import '../styles/Header.css';

export default class Header extends React.Component {
    static propTypes = {
        chatId: PropTypes.number,
        title: PropTypes.string
    };
    static defaultProps = {
        chatId: 1
    };

    render() {
        return <div className='header'>
            <div className='container'>
                <h1> {this.props.title} </h1>
                <Link to="/profile">
                    <h2>Home</h2>
                </Link>
            </div>
        </div>;
    };
}
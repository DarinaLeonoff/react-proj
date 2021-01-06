import React from 'react';
import PropTypes from 'prop-types';

import '../styles/form.css';

import { TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';




export default class SendMessage extends React.Component {
    state = {
        message: ''
    };

    static propTypes = {
        send: PropTypes.func.isRequired
    };

    send = () => {
        this.props.send({ message: this.state.message, author: 'me' });
        this.setState({ message: '' });
    };

    handleChange = event => this.setState({ message: event.target.value });

    render() {
        return <div className={'send'}>
            <TextField
                value={this.state.message}
                onChange={this.handleChange}
                multiline
                className={'message'} />
            <br />
            <Button className={'button'} onClick={this.send} variant="contained" color="primary" href="#contained-buttons">
                Send
            </Button>

        </div >;
    };
}

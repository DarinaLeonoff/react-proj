import React from 'react';
import PropTypes from 'prop-types';

import { TextField } from 'material-ui';

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
        return <div>
            <TextField
                value={this.state.message}
                onChange={this.handleChange}
                multiline={true}
                name={'message'} />
            <button onClick={this.send}>Send</button>
        </div>;
    };
}

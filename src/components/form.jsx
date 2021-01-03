import React from 'react';

import Message from './Message';


export default class Form extends React.Component {
    state = {
        text: ''
    };
    change = (eve) => {
        this.setState({ text: eve.target.value })
    };

    render() {
        return <div>
            <input value={this.state.text} onChange={this.change} />
            <button>Send</button>
        </div>;
    }
};

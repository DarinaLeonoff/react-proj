import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Message from './message';
import MessageList from './message-list';
import SendMessage from './send';
import Layout from './Layout';

import '../styles/app.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'some text 2',
            messages: [],
        }
    }

    componentDidUpdate() {
        console.log('componentWillUpdate');
        console.log(this.state.messages.length, this.state.messages.length % 2);
        if (this.state.messages.length % 2 > 0) {
            this.setState({ messages: [...this.state.messages, { message: 'i don`t understand you', author: 'bot' }] });
        }
    }

    send = objMsg => {
        this.setState({ messages: [...this.state.messages, objMsg] });
    };


    render() {
        return <MuiThemeProvider>
            <div className={'page'}>
                <Layout messages={this.state.messages} />
                <SendMessage send={this.send} />
            </div>
        </MuiThemeProvider>;
    }
};
import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Provider } from 'react-redux';

// import MessageList from './message-list';
// import SendMessage from './send';
// import Layout from './Layout';
// import Messages from './pages/Messages';

import Router from './pages/Router';
import initStore from '../store';

import '../styles/app.css';


export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    };


    componentDidUpdate(prevProps, prevState) {
        console.log('its ok');
        if (prevState.messages.length < this.state.messages.length &&
            this.state.messages[this.state.messages.length - 1].author === 'me') {
            setTimeout(() =>
                this.setState({
                    messages: [...this.state.messages, { message: 'Не приставай ко мне, я робот!', author: 'bot' }]
                }),
                1000);
        }
    }

    // send = objMsg => {
    //     this.setState({ messages: [...this.state.messages, objMsg] });
    // };


    render() {
        return <MuiThemeProvider>
            <div className={'page'}>
                <Provider store={initStore()}>
                    <BrowserRouter>
                        <Router messages={this.state.messages} />
                    </BrowserRouter>
                </Provider>
            </div>
        </MuiThemeProvider>;
    }
};
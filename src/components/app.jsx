import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Router from './pages/Router';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import initStore, { history } from '../store';
// import { PresistGate } from 'redux-persist/integration/react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import '../styles/app.css';

const { store } = initStore();

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
        }
    };

    // componentDidUpdate(prevProps, prevState) {
    //     console.log('componentWillUpdate');
    //     console.log(this.state.messages.length, this.state.messages.length % 2);
    //     if (prevState.messages.length < this.state.messages.lenght &&
    //         this.state.messages[this.state.messages.length - 1].author === 'me') {
    //         // console.log();
    //         const timeout = setTimeout(
    //             () => {
    //                 this.setState({ messages: [...this.state.messages, { message: 'I am bot', author: 'robot' }] });
    //                 this.setState({ timeout });
    //             },
    //             1000
    //         );
    //     }
    // }

    render() {
        return <MuiThemeProvider>
            <div className={'page'}>
                <Provider store={store}>
                    {/* <PersistGate loading={null} persistor={persistor}> */}
                    <ConnectedRouter history={history}>
                        <BrowserRouter>
                            <Router messages={this.state.messages} />
                        </BrowserRouter>
                    </ConnectedRouter>
                    {/* </PersistGate> */}
                </Provider>
            </div>
        </MuiThemeProvider>;
    }
};
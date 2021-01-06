import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Layout from '../Layout';




export default class Router extends React.Component {
    static propTypes = {
        messages: PropTypes.array
    };

    static propTypes = {
        messages: []
    };

    render() {
        return <>
            <Switch>
                <Route exact path='/' component={Layout} />
                <Route exact path='/chat/:chatId' render={obj =>
                    <Layout chatId={obj.match.params.chatId} messages={this.props.messages} />} />
                <Route exact path='/profile' render={() => <Layout title={'profile '} />} />
            </Switch>

        </>;
    };
};

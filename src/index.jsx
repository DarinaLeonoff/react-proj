import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App.jsx';

import './styles/normalize.css';

fetch( //возвращает промис
    '/api/chats.json'
).then(res => res.json()).then(res => console.log('res', res)).catch(err => console.log('err', err));

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
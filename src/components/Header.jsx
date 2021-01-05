import React from 'react';

import '../styles/Header.css';

export default class Header extends React.Component {
    state = {
        logo: 'It will be logo',
        link: '#',
        nameing: 'My Chat'
    };

    render() {
        return <div className='header'>
            <div className='container'>
                <a href={this.state.link} className='header-link'><span className='header-logo'>
                    {this.state.logo}</span></a>
                <h1>{this.state.nameing}</h1>
            </div>
        </div>;
    };
}
import React from 'react';

export default class installPopUp extends React.Component {
    state = {
        isShow: false,
    }

    componentDidMount() {
        const isIOS = /iphone/i.test(window.navigator.userAgent);
        const standalone = ('standalone' in window.navigator) && window.navigator.standalone;

        this.setState({ isShow: isIOS && !standalone });
    }

    render() {
        return <div style={{ display: isShow ? 'block' : 'none' }}>
            <div> install for Iphone </div>
        </div>
    }
}
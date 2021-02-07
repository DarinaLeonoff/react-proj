import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import '../styles/chatlist.css';

class Menu extends React.Component {
    render() {
        return <div><List Name={'chats'}>
            <ListItem >
                <span onClick={() => this.props.push('/chat/1')} >Bot1</span>
            </ListItem>
            <ListItem>
                <span onClick={() => this.props.push('/chat/2')} >Bot2</span>
            </ListItem>
        </List ></div>;
    };
};

const mapStateToProps = store => ({});
const mapDispatchToProps = {
    push: push
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
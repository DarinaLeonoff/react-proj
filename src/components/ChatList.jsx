import React from 'react';
// import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import PropTypes from 'prop-types';

import { List } from 'material-ui';
import { ListItem } from 'material-ui';


import '../styles/chatlist.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

export default class ChatList extends React.Component {
    static propTypes = {
        // chats: PropTypes.object.isRequired,
        // addChats: PropTypes.func.isRequired,
        push: PropTypes.func.isRequired
    };

    nav = (link) => {
        this.props.push(link);
    };

    // render() {
    // return <List className={'chats'}>
    //     <Link to='/chat/1'>
    //         <ListItem name={'chat'}>
    //             <div className={'block'}>
    //                 <div className={'chat-foto'}></div>
    //                 <p className={'chat-name'}>Bot1</p>
    //             </div>
    //         </ListItem>
    //     </Link>
    //     <Link to='/chat/2'>
    //         <ListItem name={'chat'}>
    //             <div className={'block'}>
    //                 <div className={'chat-foto'}></div>
    //                 <p className={'chat-name'}>Bot2</p>
    //             </div>
    //         </ListItem>
    //     </Link>
    // </List>;

    render() {
        const { chats } = this.props;
        const chatElement = Object.keys(chats).map(chatId => (
            <ListItem
                item={chatId}
                text={chats[chatId]}
                onClick={() => this.nav('/chat/${chatId}')} />));
        return chatElement;
    }
    // }
};

// const mapStateToProps = ({ chatReducer }) => ({
//     chats: chatReducer.chats
// });
// const mapDispatchToProps = dispatch => bindActionCreators({ push }, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(ChatList);
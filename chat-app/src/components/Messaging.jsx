import React from 'react';
import MessagingContainer from '../styled-components/MessagingContainer';
import ChatInput from './ChatInput';
import Logout from './Logout';
import Messages from './Messages';

const Messaging = ({ currentChat }) => {

    const handleSendMsg = async msg => {
        console.log(msg)
    };

    return (
        <MessagingContainer>
            <div className='chat-header'>
                <div className='user-details'>
                    <div className='avatar'>
                        <img
                            src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                            alt="Avatar"
                        />
                    </div>
                    <div className='username'>
                        <h3>
                            {currentChat.username}
                        </h3>
                    </div>
                </div>
                <Logout />
            </div>
            <Messages />
            <ChatInput handleSendMsg={handleSendMsg} />
        </MessagingContainer>
    );
};


export default Messaging;
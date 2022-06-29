import React from 'react';
import MessagingContainer from '../styled-components/MessagingContainer';
import Logout from './Logout';

const Messaging = ({ currentChat }) => {

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
            <div className="chat-messages">

            </div>
            <div className="chat-input">

            </div>
        </MessagingContainer>
    );
};


export default Messaging;
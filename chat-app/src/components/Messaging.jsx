import { useState, useEffect } from 'react';
import MessagingContainer from '../styled-components/MessagingContainer';
import ChatInput from './ChatInput';
import Logout from './Logout';
import Messages from './Messages';
import axios from 'axios';
import { getAllMessagesRoute, sendMessageRoute } from '../utils/APIRoutes';


const Messaging = ({ currentChat, currentUser }) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const getAllMessages = async () => {
            const response = await axios.post(getAllMessagesRoute, {
                from: currentUser._id,
                to: currentChat._id,
            });
            setMessages(await response.data);
        };
        getAllMessages();
    }, [currentChat]);

    const handleSendMsg = async msg => {
        await axios.post(sendMessageRoute, {
            from: currentUser._id,
            to: currentChat._id,
            message: msg,
        });
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
            <Messages messages={messages} />
            <ChatInput handleSendMsg={handleSendMsg} />
        </MessagingContainer>
    );
};


export default Messaging;
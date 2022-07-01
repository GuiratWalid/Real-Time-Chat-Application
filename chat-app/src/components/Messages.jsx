import React from 'react';
import MessagesContainer from '../styled-components/MessagesContainer';

const Messages = ({ messages }) => {
    console.log(messages);
    return (
        <MessagesContainer>
            {
                messages !== [] &&
                messages.map((message, index) => {
                    return (
                        <div>
                            <div className={`message ${message.fromSelf ? 'sended' : 'received'}`}>
                                <div className="content">
                                    <p>
                                        {message.message}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </MessagesContainer>
    );
};

export default Messages;
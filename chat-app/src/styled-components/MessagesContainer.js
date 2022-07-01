import styled from 'styled-components';

const MessagesContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: auto;
    .message {
        display: flex;
        align-items: center;
        .content: {
            max-width: 40%;
            overflow-wrap: break-word;
            padding: 1rem;
            font-size: 1.1rem;
            border-radius: 1rem;
            color: #d1d1d1;
        }
    }
    .sended {
        justify-content: flex-end;
        .content {
            background-color: #4f04ff21;
        }
    }
    .received {
        justify-content: flex-start;
        .content {
            background-color: #9900ff20;
        }
    }
`;

export default MessagesContainer;
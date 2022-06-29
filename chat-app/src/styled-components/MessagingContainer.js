import styled from 'styled-components';

const MessagingContainer = styled.div`
    padding-top: 1rem;
    .chat-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding 0 2rem;
        .user-details {
            padding-top: 15px;
            display: flex;
            align-items: center;
            gap 1rem;
            .avatar {
                img {
                    height: 3rem;
                }
            }
            .username {
                h3 {
                    color: white;
                }
            }
        }
    }
`;


export default MessagingContainer;
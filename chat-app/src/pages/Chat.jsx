import { useState, useEffect } from 'react';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import ChatContainer from '../styled-components/ChatContainer';
import { allUsersRoute } from '../utils/APIRoutes';


const Chat = () => {

    const [contacts, setContacts] = useState([]);

    const [currentUser, setCurrentUser] = useState(undefined);

    const navigate = useNavigate();

    useEffect(() => {
        const getCurrentUser = async () => {
            const user = localStorage.getItem('user');
            if (!user)
                navigate('/login');
            else
                setCurrentUser(await JSON.parse(user));
        };
        getCurrentUser();
    }, []);

    useEffect(() => {
        const getContacts = async () => {
            if (currentUser) {
                if (currentUser.isAvatarImageSet) {
                    const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
                    setContacts(data.data);
                }
                else {
                    navigate('/setAvatar');
                }
            }
        };
        getContacts();
    }, [currentUser]);

    return (
        <ChatContainer>
            <div className='container'>

            </div>
        </ChatContainer>
    )
};

export default Chat;
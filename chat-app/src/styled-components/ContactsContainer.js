import styled from 'styled-components';

const ContactsContainer = styled.div`
    display: grid;
    grid-template-rows: 10% 75% 15%;
    oveflow: hidden;
    
    border-radius: 0.5rem 0 0 0.5rem;
    background-color: #080420;
    .brand{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;
        img{
            height: 7rem;
        }
        h3 {
            color: white;
            text-transform: uppercase;
            font-size: 2rem;
        }
    }
    .contacts {
        display:flex;
        flex-direction: column;
        align-items: center;
        overflow: auto;
        max-height: 515px;
        gap: 0.8rem;
        .contact{
            background-color: #ffffff39;
            min-height: 6rem;
            width: 90%;
            cursor: pointer;
            border-radius
            padding: 0.4rem;
            gap: 1rem;
            align-items: center;
            display: flex;
            transition: 0.5s ease-in-out;
            .avatar{
                img{
                    height: 3rem;
                }
            }
            .username{
                h3{
                    color:white;
                }
            }
            @media screen and (max-width: 1000px){
                flex-direction: column;
                .username{
                    h3{
                        font-size: 1rem;
                        padding: 2px;
                        margin: 0;
                    }
                }
            }
        }
        .selected{
            background-color: #9186f3;
        }
    }
    .current-user{
        border-radius: 0 0 0 0.5rem;
        background-color: #0d0d30;
        display: flex;
        justify-content:center;
        align-items: center;
        gap: 2rem;
        .avatar{
            img{
                height: 4rem;
                max-inline-size: 100%;
            }
        }
        .username{
            h2{
                color:white;
            }
        }
    }
    @media screen and(min-width:720px) and (max-width: 1080px){
        gap: 0.5rem;
        .username{
            h2{
                font-size: 1rem;
            }
        }
    }
`;


export default ContactsContainer;
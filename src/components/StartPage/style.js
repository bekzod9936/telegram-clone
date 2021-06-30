import styled from 'styled-components';

export const Container=styled.div`
width: 100vw;
height: 100vh;
background-color: var(--darkblue);
`;

export const Div=styled.div``;

Div.Img=styled.img`
width: 100%;
`;

Div.Content=styled.div`
width: 100%;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`;
Div.Header=styled.h1`
text-align: center;
color: var(--white);
font-size: 40px;
margin-bottom: 10px;
margin-top: 30px;
`;
Div.Info=styled.p`
color: var(--grey);
text-align: center;
font-size: 24px;
font-weight: 500;
margin-bottom: 5px;
`;
Div.Button=styled.button`
background-color: var(--blue);
color: var(--white);
border: none;
width: 70%;
font-size: 25px;
padding: 25px;
border-radius: 5px;
margin-top: 70px;
cursor: pointer;
`;


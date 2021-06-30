import styled from 'styled-components';

export const Div=styled.div``

Div.Wrapper=styled.div`
width: 40px;
height: 20px;
background-color:${props => props.switch ? '#5389C1' : props.mouse ? '#DCDCDC' : '#6D7883'};
border-radius: 50px;
display: flex;
align-items: center;
justify-content: ${props => props.switch ? 'flex-end':'flex-start'};
`
Div.Round=styled.div`
width: 22px;
height: 22px;
border-radius: 50%;
background-color: var(--darkblue);
border:  ${props => props.switch ? '2px solid #5389C1' : props.mouse ? '2px solid #DCDCDC' : '2px solid #6D7883'};
`
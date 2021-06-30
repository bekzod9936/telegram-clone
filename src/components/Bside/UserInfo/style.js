import styled ,{css} from 'styled-components';
import Grid from '@material-ui/core/Grid'
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
export const Icon = styled.div`
`;
Icon.OutLine = styled(ErrorOutlineIcon)`
color: #6D7883;
`
const hover = css`
:hover{
background-color: #232E3C ;
}
`
export const User = styled.div`
color: white;
font-size: 18px;
`;
export const Info = styled.p`
color: #6D7883;
margin-top: 10px;
`;
export const Gridd=styled(Grid)`
background-color:${({ bgcolor }) => bgcolor && '#17212B'} ;
padding: ${props => (props.ptb && '20px 0') || (props.plr && '0 20px') || (props.p && '20px') || (props.p10 && '10px 20px')};
cursor: ${({cursor})=> cursor && 'pointer'};
${props => props.hover && `${hover}`};
`
export const Button=styled.button`
border: none;
background-color: transparent;
color: #5389C1;
width: 100%;
cursor: inherit;
text-align: left;
`
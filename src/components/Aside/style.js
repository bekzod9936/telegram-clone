import styled , {css} from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid'
export const Input=styled.input`
outline: none;
flex-grow: 0.8;
height: 45px;
border-radius: 5px;
background-color: #242F3D;
color: #6D7883;
font-size: 18px;
padding: 3px 20px;
border:none;
::placeholder{
  color: #6D7883;
  font-size: 18px;
}
`
const scroll=css`
overflow-y: scroll;
scroll-behavior: smooth;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track  {
  background: transparent;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: transparent;
    border-radius: 10px;
}
:hover::-webkit-scrollbar-track  {
  background: #3F4750;
}
:hover::-webkit-scrollbar-thumb  {
  background: #9A9EA3;
}
`;
export const IconMenu=styled(MenuIcon)`
color: var(--grey);
:hover{
color: #DCDCDC;
}
`
export const Gridd = styled(Grid)`
${props => props.scroll ? `${scroll}`: null}
height: ${props => props.height==='10' ? '10vh' : props.height==='90'? '90vh' : null };
border-bottom: ${props => props.border && '1px solid #101921'};
border-right: ${props => props.borderr && '1px solid #101921'};
`
import styled , {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import CloseIcon from '@material-ui/icons/Close';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
export const Icon=styled.div`
`;
const iconstyle = css`
color: #6D7883;
:hover{
  color: white;
}
`
Icon.Close = styled(CloseIcon)`
${iconstyle};
`
Icon.OutLine = styled(ErrorOutlineIcon)`
color: #6D7883;
`

const hover=css`
:hover{
background-color: #232E3C ;
}
`
const scroll = css`
overflow-y: scroll;
scroll-behavior: smooth;
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track  {
  background: #17212B;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb {
  background: #17212B;
    border-radius: 10px;
}
:hover::-webkit-scrollbar-track  {
  background: #3F4750;
}
:hover::-webkit-scrollbar-thumb  {
  background: #9A9EA3;
}
`;
export const Gridd=styled(Grid)`
border-left:${props => props.main ? '1px solid #101921' : null};
${props => props.scroll ? `${scroll}` : null};
height:${props => props.height==='10' ? '10vh' : props.height==='90'? '90vh' :  null};
padding:${props => props.padding ? '20px' : null };
padding:${props => props.paddinglr ? '0 20px' : null };
background-color: ${props => props.light ? '#232E3C' : '#17212B'};
border-bottom: ${props => props.border ? '1px solid #101921': null} ;
padding-left:${props => props.paddingl ? '20px' : null};
margin-bottom: ${props => props.mb ? '15px' : null};
${props => props.hover ? `${hover}` : null}
cursor:${props => props.point ? `pointer` : null};
`;

export const Avatar=styled.div`
width: 100px;
height: 100px;
background-color: orange;
border-radius: 50%;
`;
export const Img = styled.img`
width: 100%;
height: 100%;
border-radius: 50%;
`;

export const User=styled.div`
color: white;
font-size: 18px;
`;
export const Info = styled.p`
color: #6D7883;
margin-top: 10px;
`;


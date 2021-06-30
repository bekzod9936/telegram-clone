import styled , {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

import MicNoneIcon from '@material-ui/icons/MicNone';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import InsertDriveFileOutlinedIcon from '@material-ui/icons/InsertDriveFileOutlined';
import VideocamOutlinedIcon from '@material-ui/icons/VideocamOutlined';
import HeadsetOutlinedIcon from '@material-ui/icons/HeadsetOutlined';

export const Icon = styled.div``;

Icon.Photo = styled(InsertPhotoIcon)`
color: #6D7883;`
Icon.Video = styled(VideocamOutlinedIcon)`
color: #6D7883;`
Icon.File = styled(InsertDriveFileOutlinedIcon)`color: #6D7883;`
Icon.Head = styled(HeadsetOutlinedIcon)`color: #6D7883;`;
Icon.Insert = styled(InsertLinkIcon)`
color: #6D7883;`
Icon.Mic = styled(MicNoneIcon)`
color: #6D7883;`
Icon.Person = styled(PersonOutlineIcon)`
color: #6D7883;`


const btnhover=css`
:hover{
  background-color: #232E3C;
};
cursor: pointer;
`;
export const Gridd = styled(Grid)`
${props => props.hover 
&& `${btnhover}`};
margin-top:${props => props.mt
    && '20px'};
background-color: ${({ mt }) => mt && '#17212B'};
color: ${props => props.color};
  
    padding: ${props => (props.padding &&
  '0 20px') || (props.padding5 &&
    '5px 20px') || (props.paddingt && '20px 0')};
`;
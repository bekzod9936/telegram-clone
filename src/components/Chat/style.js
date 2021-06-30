import styled , {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import ViewColumnIcon from '@material-ui/icons/ViewColumn';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import { IconButton } from '@material-ui/core'
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
export const Gridd=styled(Grid)`
height: ${props=> props.height==='80'? '80vh' : props.height==='10'? '10vh' : 'fit-content'};
border-bottom: ${props => props.border ? '1px solid #101921': null};
color: ${props => props.color === 'white' ? 'white' : '#6D7883'};
padding-left: ${props => props.padding ? '20px' : null};
padding-bottom: ${props => props.borderb ? '5px' : null};
background-color: ${props => props.bgcolor? '#0E1621': null};
`
const iconstyle=css`
color: #6D7883;
:hover{
  color: white;
}
`
export const Icon = styled.div`
`;
Icon.Search = styled(SearchIcon)`
${iconstyle}
`
Icon.Phone = styled(LocalPhoneIcon)`
${iconstyle}
`
Icon.Column = styled(ViewColumnIcon)`
${iconstyle}
`
Icon.Vert = styled(MoreVertIcon)`
${iconstyle}
`;
Icon.Mood = styled(MoodIcon)`
${iconstyle}
`
Icon.Mic = styled(MicIcon)`
${iconstyle}
`
export const WrapInput = styled.div`
height: 100%;
width: 100%;
position: relative;
`
export const Input=styled.input`
height: 100%;
width: 100%;
padding: 10px 20% 10px 10% ;
outline: none;
background-color: #17212B;
border: none;
font-size: 16px;
color: #6D7883;
`
export const File = styled(AttachFileIcon)`
transform: rotate(-135deg);
${iconstyle}
`
export const IconB = styled(IconButton)`
position: absolute;
left: ${props => props.p1 ? '0': props.p2? '80%' : props.p3 ? '90%' : null};
top: 50%;
transform: translate(0, -50%);
`
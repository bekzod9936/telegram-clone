import styled , {css} from 'styled-components';
import Grid from '@material-ui/core/Grid'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';

export const IconNot = styled(NotificationsNoneIcon)`
color: #6D7883;
`

const btnhover = css`
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
color: ${props => props.color};
  
    padding: ${props => (props.padding &&
    '0 20px') || (props.padding5 &&
      '5px 20px') || (props.paddingt && '20px 0')};
`
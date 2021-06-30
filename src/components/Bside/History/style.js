import styled , {css} from 'styled-components';
import Grid from '@material-ui/core/Grid';
import ListIcon from '@material-ui/icons/List';

export const IconList = styled(ListIcon)`
color: #6D7883;
`

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
  '0 20px') || (props.padding10 &&
    '10px 20px') || (props.paddingt && '20px 0')};
`;
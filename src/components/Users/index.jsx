import React from 'react'
import Grid from '@material-ui/core/Grid'
import { Avatar, Img, Badge } from './style';
import pic from '../../assets/images/logo.png'
import {makeStyles} from '@material-ui/styles'

const useStyles=makeStyles({
  wrap:{
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  color:  '#6D7883' ,
  },
  wrap1: {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    color:  'white' ,
  },
  container:{
    padding: '10px 0',
    '&:hover': {
      backgroundColor: '#202B36',
      cursor: 'pointer'
    }
  }
})
const Index = () => {
  const classes=useStyles()
  return (
    <Grid item container xs={12} className={classes.container} >
      <Grid item xs={2} container justify='center' >
        <Avatar>
          {true ? <Img src={pic} alt='user' /> : null}
        </Avatar>
      </Grid>
      <Grid item xs={10} container  >
        <Grid item container alignItems='center' xs={12}>
          <Grid item xs={9}  className={classes.wrap1}   >Jone Doe</Grid>
          <Grid item xs={3} container justify='center' className={classes.wrap} >27.07.2021</Grid>
        </Grid>
        <Grid item container alignItems='center' xs={12}>
          <Grid item xs={9} className={classes.wrap}  >jnsjdfnsdnfvjnsdfkuvjnudsfnnnnnnnnnsgsedfgsvfdvserv</Grid>
          <Grid item  xs={3} container justify='center'   >
            <Badge>9999</Badge>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Index

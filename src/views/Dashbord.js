import React from 'react'
import Grid from '@material-ui/core/Grid';
import Aside from '../components/Aside';
import Chat from '../components/Chat';
import Bside from '../components/Bside'
const Dashbord = () => {
  return (
    <Grid item container xs={12} style={{backgroundColor: 'var(--darkblue)', height: '100vh' , width: '100vw'}}>
      <Grid item container xs={12} >
        <Grid item xs={4}>
          <Aside />
        </Grid>
        <Grid item container xs={8} >
          <Grid item xs={7}>
            <Chat />
          </Grid>
          <Grid item xs={5}><Bside /></Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default Dashbord

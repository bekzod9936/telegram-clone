import React from 'react'
import IconButton from '@material-ui/core/IconButton';
import Users from '../Users'
import { Input, IconMenu, Gridd } from './style'
const Index = () => {
  return (
    <Gridd item container borderr='true' xs={12} >
      <Gridd item container xs={12} height='10' border='true' justify='space-evenly' alignItems='center' >
      <IconButton>
          <IconMenu fontSize='large'  />
      </IconButton>
      <Input type='text' placeholder='Search' />
      </Gridd>
      <Gridd item container   xs={12}>
        <Gridd item xs={12} scroll='true' height='90'>
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      <Users />
      </Gridd>
      </Gridd>
    </Gridd>
  )
}

export default Index

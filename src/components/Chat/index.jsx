import React from 'react'
import { Gridd, Icon, Input, File, WrapInput, IconB} from './style'
import { IconButton } from '@material-ui/core'
const Index = () => {
  return (
    <Gridd container item xs={12}>
      <Gridd item container alignItems='center' border='true' padding='true'  xs={12} height='10'>
        <Gridd item container  xs={6} >
          <Gridd item xs={12} borderb='true' color='white'>Jone Doe</Gridd>
          <Gridd item color='grey' xs={12}>Last seen recently</Gridd>
        </Gridd>
        <Gridd item container justify='flex-end' xs={6}>
          <IconButton>
            <Icon.Search/>
          </IconButton>
          <IconButton>
            <Icon.Phone/>
          </IconButton>
          <IconButton>
            <Icon.Column/>
          </IconButton>
          <IconButton>
            <Icon.Vert/>
          </IconButton>
        </Gridd>
      </Gridd>
      <Gridd item height='80' bgcolor='true' xs={12}></Gridd>
    <Gridd item height='10' xs={12}>
        <WrapInput>
          <IconB p1='true'>
            <File fontSize='large' />
          </IconB>
          <Input type='text' placeholder='Write a message...' />
          <IconB p2='true'>
            <Icon.Mood fontSize='large' />
          </IconB>
          <IconB p3='true'>
            <Icon.Mic fontSize='large' />
          </IconB>
        </WrapInput>
    </Gridd>
    </Gridd>
  )
}

export default Index

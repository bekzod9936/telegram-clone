import React from 'react'
import { Gridd, Icon, User, Info, Button } from './style'
import Notification from '../Notification'
const Index = () => {
  return (
    <Gridd container item xs={12} bgcolor='true' ptb='true'>
      <Gridd container item xs={12} alignItems='center' plr='true' >
        <Gridd item xs={3}>
          <Icon.OutLine fontSize='large' />
        </Gridd>
        <Gridd item xs={9}>
          <User>
            +99897 7777777
          </User>
          <Info>
            Mobile
          </Info>
        </Gridd>
      </Gridd>
      <Gridd container item xs={12} justify='flex-end'  alignItems='center' p='true' >
        <Gridd item xs={9}>
          <User>
            @sdnmsanf
          </User>
          <Info>
            Username
          </Info>
        </Gridd>
      </Gridd>
      <Gridd container item xs={12} justify='flex-end'alignItems='center' cursor='true' hover='true' p10='true'>
        <Gridd item xs={9}><Button>ADD TO CONTACTS</Button></Gridd>
      </Gridd>
      <Notification />
    </Gridd>
  )
}

export default Index

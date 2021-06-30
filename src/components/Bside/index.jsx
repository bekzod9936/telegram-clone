import React from 'react'
import { Gridd, User, Icon, Avatar, Img, Info } from './style';
import IconButton from '@material-ui/core/IconButton';
import History from './History'
import Media from './Media'
import UserInfo from './UserInfo'
const Index = () => {
  return (
    <Gridd item container main='true' xs={12}>
      <Gridd item container paddingl='true' border='true' alignItems='center' height='10' xs={12}>
        <Gridd item xs={6}><User>User Info</User></Gridd>
        <Gridd item container justify='flex-end' xs={6}><IconButton>
          <Icon.Close fontSize='large' />
        </IconButton></Gridd>
      </Gridd>
      <Gridd item height='90' light='true' xs={12} scroll='true'>
        <Gridd item container mb='true' padding='true' alignItems='center' xs={12}>
          <Gridd item xs={4}>
            <Avatar>
              <Img />
            </Avatar>
          </Gridd>
          <Gridd item  xs={8}>
            <User>
              Jone Doe
            </User>
            <Info>
              last seen recently
            </Info>
          </Gridd>
        </Gridd>
        <UserInfo />
        <Media />
        <History />
      </Gridd>
    </Gridd>
  )
}

export default Index
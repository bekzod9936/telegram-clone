import React from 'react'
import { Gridd, IconList} from './style';

const Index = () => {
  return (
    <Gridd container paddingt='true' mt='true' item xs={12}>
      <Gridd container padding='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><IconList fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>Share this contact</Gridd>
      </Gridd>
      <Gridd container padding10='true' alignItems='center' justify='flex-end' item xs={12} hover='true'>
        <Gridd item color='white' xs={9}>Clear history</Gridd>
      </Gridd>
      <Gridd container padding10='true' alignItems='center' justify='flex-end' item xs={12} hover='true'>
        <Gridd item color='white' xs={9}>Delete chat</Gridd>
      </Gridd>
      <Gridd container padding10='true' alignItems='center' justify='flex-end' item xs={12} hover='true'>
        <Gridd item color='red' xs={9}>Block user</Gridd>
      </Gridd>
    </Gridd>
  )
}

export default Index

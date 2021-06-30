import React from 'react'
import { Gridd, Icon } from './style';

const Index = () => {
  return (
    <Gridd container paddingt='true' mt='true' item xs={12}>
      <Gridd container padding5='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><Icon.Photo  fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>248 photos</Gridd>
      </Gridd>
      <Gridd container padding5='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><Icon.Video fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>82 videos</Gridd>
      </Gridd>
      <Gridd container padding5='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><Icon.File fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>109 file</Gridd>
      </Gridd>
      <Gridd container padding5='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><Icon.Head fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>23 audio file</Gridd>
      </Gridd>
      <Gridd container padding5='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><Icon.Insert fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>23 Shared links</Gridd>
      </Gridd>
      <Gridd container padding5='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><Icon.Mic fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>234 voice messages</Gridd>
      </Gridd>
      <Gridd container padding5='true' alignItems='center' item xs={12} hover='true'>
        <Gridd item xs={3}><Icon.Person fontSize='large' /></Gridd>
        <Gridd item color='white' xs={9}>34 groups in common</Gridd>
      </Gridd>
    </Gridd>
  )
}

export default Index

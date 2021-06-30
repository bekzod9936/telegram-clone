import React, { useState, useEffect } from 'react'
import { Gridd, IconNot} from './style'
import Switch from '../../Switch'
const Index = () => {
  const [state, setState] = useState(false);
  const [mouse, setMouse] = useState(false);
  const handleClick=()=>{
    setState(!state)
  }
  useEffect(() => {
    console.log(mouse);
  }, [mouse]);
  return (
    <Gridd container item xs={12} mt='true' >
      <Gridd container item xs={12} padding5='true' alignItems='center' onMouseOut={() => setMouse(false)} onMouseOver={() => setMouse(true)} onClick={() => handleClick()}  hover='true' >
        <Gridd item xs={3}><IconNot fontSize='large' /></Gridd>
        <Gridd container item xs={9} justify='space-between' color='white'>
          <Gridd item xs={8}>Notifications</Gridd>
          <Gridd container item xs={4} justify='flex-end'><Switch check={state} mouse={mouse}  /></Gridd>
          </Gridd>
      </Gridd>
    </Gridd>
  )
}

export default Index

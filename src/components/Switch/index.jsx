import React, { useState} from 'react'
import { Div } from './style'
const Index = ({check , mouse}) => {
  const [state, setState] = useState(false);
  return (
    <>
      <Div.Wrapper switch={check} mouse={mouse}><Div.Round onClick={() => setState(!state)} switch={check} mouse={mouse} /></Div.Wrapper>
    </>
  )
}

export default Index

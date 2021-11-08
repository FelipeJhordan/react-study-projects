import React, { useState } from 'react';
import logo from './logo.svg';
import { AppDiv } from './styles'
import { CardContainer } from '../CardContainer'
import { Content } from '../Content';

function App() {
  const [photo, setPhoto] = useState("")
  return (
    <AppDiv>
      <CardContainer input />
      <Content />
      <CardContainer />
    </AppDiv>
  );
}

export default App;

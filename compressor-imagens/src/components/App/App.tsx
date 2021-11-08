import React from 'react';
import { AppDiv } from './styles'
import { CardContainer } from '../CardContainer'
import { Content } from '../Content';

function App() {
  return (
    <AppDiv>
      <CardContainer input />
      <Content />
      <CardContainer />
    </AppDiv>
  );
}

export default App;

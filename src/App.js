import React, { useState } from "react";
import MainCard from './components/MainCard/MainCard';
import { AppContainer, ButtonLimpar, MainCardContainer } from './styled';
import { url, headers } from "./constants/Constants";
import axios from "axios";



function App() {
  const [clearCounter, setClearCounter] = useState('a');

  const clear = () => {
    axios.put(`${url}/clear`, headers)
      .then((res) => {
        console.log(res)
        setClearCounter(clearCounter + 'a')
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <AppContainer>
      <MainCardContainer>
        <MainCard clearButton={clearCounter}/>
      </MainCardContainer>
      <ButtonLimpar onClick={clear}>Limpar swipes e matches</ButtonLimpar>
    </AppContainer>
  );
}

export default App;

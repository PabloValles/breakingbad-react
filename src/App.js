import { useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Frase from './components/Frase'

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 1px solid #000;
  transition: background-size .8s ease;
  outline: none;

  &:hover{
    cursor: pointer;
    background-size: 400px;
  }
`
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

function App() {

  const [frase, guardarFrase] = useState({})

  const consultarApi = async () => {    
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const result = await api.json()
    guardarFrase(result[0])
  }

  // Cargar una frase al iniciar
  useEffect(() => {
    consultarApi()
  }, [])

  return (
      <Contenedor>
        <Frase 
          frase={frase}
        />
        <Boton
          onClick={consultarApi}
        >Obtener frase</Boton>

      </Contenedor>
  );
}

export default App;

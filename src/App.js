import logo from './logo.svg';
import styled from '@emotion/styled'

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
  color: #fff;
  margin-top: 3rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 1px solid #000;
`
const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`

function App() {

  const consultarApi = () => {
    console.log("Consultando")
  }

  return (
      <Contenedor>
        <Boton
          onClick={consultarApi}
        >Obtener frase</Boton>

      </Contenedor>
  );
}

export default App;

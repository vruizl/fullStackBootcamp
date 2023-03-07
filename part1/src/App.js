
import './App.css';
import './Mensaje.js';
import Mensaje from './Mensaje.js';

//Otro componente --> no definir dentro de otro componente
//Podría ser interesante crearlo en su propio archivo
const Mensaje2 = () => {
  return <h1>Hola funciona como subcomponente</h1>
}

const Description = () => {
  return <p> Descripción </p>
}

function App() {
  const mensaje  = 'Hola mundo 2'
  return (
    <div className="App">
      <Mensaje color='red' message='estamos trabando'/>
      <Mensaje color='green' message='en un curso'/>
      <Mensaje color = 'blue' message='de React'/>
      <Mensaje2 />
      <Description/>
    </div>
  );
}

export default App;

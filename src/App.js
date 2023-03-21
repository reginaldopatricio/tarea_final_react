import './App.css';
import Producto from './componentes/producto';
import Validar from './componentes/validacion';

function App() {
  return (
    <div className="App">
      <Producto initialNumber = {0}/>
      <Validar/>
    </div>
  );
}

export default App;

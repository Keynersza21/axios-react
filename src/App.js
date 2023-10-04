import logo from './logo.svg';
import './App.css';
import ListaProductos from './components/ListaProductos';
import LogApi from './Pages/LogApi';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element ={<ListaProductos/>} />
      <Route path='sesion' element = {<LogApi/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

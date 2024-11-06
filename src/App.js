import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import TicTacToe from './pages/TicTacToe';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/tela' element={<TicTacToe/>}></Route>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

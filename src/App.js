import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { PokemonList } from './components/PokemonList/PokemonList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PokemonList />} />
        <Route path='/:id' element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

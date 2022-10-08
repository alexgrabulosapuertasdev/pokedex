import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { PokemonDetail } from './components/PokemonDetail/PokemonDetail';
import { PokemonList } from './components/PokemonList/PokemonList';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/pokedex' element={<PokemonList />} />
        <Route path='/pokemon/:id' element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

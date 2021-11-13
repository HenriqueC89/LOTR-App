import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchCharacter } from './store/characters';
import React from 'react';
import CharactersResult from './Components/CharactersResult';

function App() {
  // const { characters } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchCharacter({ search }));
  }

  return (
    <div className='container'>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='charactersSearch'>Busque personagens</label>
        <input
          id='charactersSearch'
          type='search'
          value={search}
          onChange={({ target }) => setSearch(target.value)}
        />
        <button>Busca</button>
      </form>
      <CharactersResult />
    </div>
  );
}

export default App;

import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { searchCharacter } from './store/characters';
import React from 'react';
import CharactersResult from './Components/CharactersResult';
import Loading from './Components/Helper/Loading';
import logoLeft from './Assets/Argonath-left.jpg';
import logoRight from './Assets/Argonath-right.jpg';

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
      <img
        className='sideImages imageLeft'
        src={logoLeft}
        alt='Estátua Argonath esquerda'
      />
      <div className='innerContainer'>
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
        {/* <Loading /> */}
        <CharactersResult />
        {/* <CharactersResult /> */}
      </div>
      <img
        className='sideImages imageRight'
        src={logoRight}
        alt='Estátua Argonath direita'
      />
    </div>
  );
}

export default App;

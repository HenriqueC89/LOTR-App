import './App.css';
import React from 'react';
import CharactersResult from './Components/CharactersResult';
import Loading from './Components/Helper/Loading';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className='container'>
        <Search />
        {/* <Loading /> */}
        <CharactersResult />
        {/* <CharactersResult /> */}
    </div>
  );
}

export default App;

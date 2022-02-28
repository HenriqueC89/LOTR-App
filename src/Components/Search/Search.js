
import { useDispatch } from 'react-redux';
import { searchCharacter } from '../../store/characters';
import React from 'react';

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchCharacter({ search }));
  }

  return (
    <div className='search_container'>
        <form action='' onSubmit={handleSubmit}>
          <label htmlFor='inpt-charactersSearch'>Search characters</label>
          <input
            id='inpt-charactersSearch'
            type='search'
            value={search}
            onChange={({ target }) => setSearch(target.value)}
          />
          <button>Search</button>
        </form>
    </div>
  );
}

export default Search;

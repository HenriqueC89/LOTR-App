
import { useDispatch } from 'react-redux';
import { searchCharacter, loadCharacters } from '../../store/characters';
import React from 'react';

function Search() {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState('');

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(searchCharacter({ search }));
  }

  React.useEffect(() => {
    if (!search) dispatch(loadCharacters(1));
  }, [dispatch, search]);

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

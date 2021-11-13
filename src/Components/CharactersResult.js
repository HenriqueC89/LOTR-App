import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCharacters } from '../store/characters';
import styles from './CharactersResult.module.css';

const CharactersResult = () => {
  const { loading, error, data } = useSelector(
    (state) => state.CharactersReducers.characters
  );
  console.log(data);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadCharacters(1));
  }, [dispatch]);
  if (!data) return <div>Loading</div>;
  if (data)
    return (
      <ul>
        {data.docs?.map((character) => (
          <li className={styles.list} key={character._id}>
            <div className={styles.infos}>
              <p className={styles.name}>
                Nome: <span>{character.name}</span>
              </p>
              <p className={styles.race}>
                Raça: <span>{character.race || '-'}</span>
              </p>
              <p className={styles.birth}>
                Nascimento: <span>{character.birth || '-'}</span>
              </p>
              <a
                className={styles.Link}
                href={character.wikiUrl}
                target='_blank'
                rel='noreferrer'
              >
                Wiki
              </a>
            </div>
          </li>
        ))}
      </ul>
    );
};

export default CharactersResult;

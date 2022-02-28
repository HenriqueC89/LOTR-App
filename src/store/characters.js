import createAsyncSlice from './helper/createAsyncSlice';
import { combineReducers } from '@reduxjs/toolkit';
const API_KEY = process.env.REACT_APP_API_KEY;

const character = createAsyncSlice({
  name: 'character',
  initialState: {
    data: [],
  },
  reducers: {},
  fetchConfig: (name) => ({
    url: `https://the-one-api.dev/v2/character?name=/${name}/i`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: { Authorization: `Bearer ${API_KEY}` },
    },
  }),
});

const characters = createAsyncSlice({
  name: 'characters',
  initialState: {
    data: [],
  },
  reducers: {},
  fetchConfig: (page, limit = 10) => ({
    url: `https://the-one-api.dev/v2/character?page=${page}&limit=${limit}`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: { Authorization: `Bearer ${API_KEY}` },
    },
  }),
});

const CharactersReducers = combineReducers({
  character: character.reducer,
  characters: characters.reducer,
});

// export const { addCharacters } = characters.actions;
export const fetchCharacter = character.asyncAction;
export const fetchCharacters = characters.asyncAction;

export const searchCharacter =
  ({ search }) =>
  async (dispatch) => {
    try {
      console.log(search);
      await dispatch(fetchCharacter(search));
    } catch (error) {
      console.error(error);
    }
  };

export const loadCharacters = (page) => async (dispatch) => {
  try {
    console.log(page);
    await dispatch(fetchCharacters(page));
  } catch (error) {
    console.error(error);
  }
};

export default CharactersReducers;

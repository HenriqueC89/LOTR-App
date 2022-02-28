import createAsyncSlice from './helper/createAsyncSlice';
import { combineReducers } from '@reduxjs/toolkit';
const API_KEY = process.env.REACT_APP_API_KEY;

const characters = createAsyncSlice({
  name: 'characters',
  initialState: {
    data: [],
  },
  reducers: {},
  fetchConfig: (page = 1, limit = 10, search = '') => ({
    url: `https://the-one-api.dev/v2/character?page=${page}&limit=${limit}&name=/${search}/i`,
    options: {
      method: 'GET',
      cache: 'no-store',
      headers: { Authorization: `Bearer ${API_KEY}` },
    },
  }),
});

const CharactersReducers = combineReducers({
  characters: characters.reducer,
});

export const fetchCharacters = characters.asyncAction;

export const searchCharacter =
  ({ search }) =>
  async (dispatch) => {
    try {
      await dispatch(fetchCharacters(1, 10, search));
    } catch (error) {
      console.error(error);
    }
  };

export const loadCharacters = (page) => async (dispatch) => {
  try {
    await dispatch(fetchCharacters(page));
  } catch (error) {
    console.error(error);
  }
};

export default CharactersReducers;

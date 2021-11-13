import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CharactersReducers from './characters';

const reducer = combineReducers({ CharactersReducers });
const store = configureStore({ reducer });

export default store;

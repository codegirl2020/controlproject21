import * as actionTypes from '../actions/actionTypes';
import { createStore } from 'redux';

const initialState = {
  news: ''
}

const newsReducer = (state = initialState, action) => {
  return state;
}
export default newsReducer;
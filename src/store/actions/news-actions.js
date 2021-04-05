import * as actionTypes from './actionTypes';
import axios from '../../api/axios-firebase';

const newsAdding = () => {
  return { type: actionTypes.ADD_NEWS }
}

const newsRemoving = () => {
  return { type: actionTypes.REMOVE_NEWS }
}
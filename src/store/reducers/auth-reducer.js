import * as actionTypes from '../actions/actionTypes';
import Preloader from '../../components/UI/Preloader/Preloader';

const initialState = {
  user: null,
  loading: false
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_REQUEST:
      return {
        ...state,
        loading: true

      }



    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        user: action.user,
        loading: false
      }
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        user: null,
        loading: false
      }


    default: return state;
  }
}
export default authReducer;
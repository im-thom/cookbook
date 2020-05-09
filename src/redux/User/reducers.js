// import { REQUEST_GET_RECIPES, RECEIVE_GET_RECIPES } from './actions';
import { handleActions } from "redux-actions";
import { 
  requestAuth, 
  requestAuthSuccess, 
  requestAuthFail,
  requestRegistration,
  requestRegistrationSuccess,
  requestRegistrationFail,
  getUserAuthToken
} from "./actions"


export const initialState = {
  token: null,
  loading: false,
  error: null,
}

const reducer = handleActions(
  {
    [requestAuth]: (state) => (
    {
      ...state,
      error: null,
      loading: true
    }
    ),
    [requestAuthSuccess]: (state, { token }) => (
      {
      ...state,
        token: token,
        error: null,
        loading: false
    }),
    [requestAuthFail]: (state, { error }) => (
      {
      ...state,
      error: error,
      loading: false
    }),
    [requestRegistration]: (state) => (
    {
      ...state,
      error: null,
      loading: true
    }
    ),
    [requestRegistrationSuccess]: (state, { token }) => (
      {
      ...state,
        token: token,
        error: null,
        loading: false
    }),
    [requestRegistrationFail]: (state, { error }) => (
      {
      ...state,
      error: error,
      loading: false
    }),
    [getUserAuthToken]: (state, {token}) => ({
      token
    }),

  },
  initialState,
);

export default reducer;

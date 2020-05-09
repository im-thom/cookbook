import { createAction } from 'redux-actions';
import * as CONSTANTS from './constants';
import { create } from 'domain';



export const loginWithProvider = createAction(
  CONSTANTS.LOGIN_WITH_PROVIDER,
  (provider: any) => ({provider})
)

export const requestAuth = createAction(
  CONSTANTS.REQUEST_AUTH,
  (username: any, email: any, password: any) => ({ username, email, password })
);

export const requestAuthSuccess = createAction(
  CONSTANTS.REQUEST_AUTH_SUCCESS,
  (token: any) => token
);

export const requestAuthFail = createAction(
  CONSTANTS.REQUEST_AUTH_FAILURE,
  (error: any) => error
);


// User Registration
export const requestRegistration = createAction(
  CONSTANTS.REQUEST_REGISTRATION,
  (username: any, email: any, password1: any, password2: any) => ({ username, email, password1, password2 })
);

export const requestRegistrationSuccess = createAction(
  CONSTANTS.REQUEST_REGISTRATION_SUCCESS,
  (token: any) => token
);

export const requestRegistrationFail = createAction(
  CONSTANTS.REQUEST_REGISTRATION_FAILURE,
  (error: any) => error
);

const getState = (state: any) => state.user;

export const getUserAuthToken = createAction(
  CONSTANTS.GET_USER_AUTH_TOKEN,
  (state: any) => state.token
)
// console.log('State inside get user auth', state.token)
// getState(state).token


export const getIsLoggedIn = (state: any) => getUserAuthToken(state) != null;


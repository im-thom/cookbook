import {
  call,
  put,
  select,
  takeEvery,
  takeLatest,
  all,
} from "redux-saga/effects";
import * as Constants from "../redux/User/constants";

import * as ACTIONS from "../redux/User/actions";
import User from "../redux/User";
import * as api from "../services/api";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyASb4yZ0JY3CLvlkONZI7k3CzvcVNr8PN0",
  authDomain: "cookbook-f485f.firebaseapp.com",
  databaseURL: "https://cookbook-f485f.firebaseio.com",
  projectId: "cookbook-f485f",
  storageBucket: "cookbook-f485f.appspot.com",
  messagingSenderId: "910034597723",
  appId: "1:910034597723:web:72327e315a6272ab80cc7e",
};


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


export function* handleLaunch(action) {
  const token = yield put(ACTIONS.getUserAuthToken);
  // If no token, navigate to signin
  console.log(token);
}

export function* loginWithProvider(action) {
  const { provider } = action.payload;

  console.log(action);
  console.log(`Logging in with ${provider}`);

  if (provider === "facebook") {
    const provider = new firebase.auth.FacebookAuthProvider();

    const { credential } = yield call([auth, auth.signInWithPopup], provider);

  }
}

export default function* watcher() {
  yield all([
    takeLatest(ACTIONS.loginWithProvider, loginWithProvider),
    // takeLatest(handleLaunch),
  ]);
}

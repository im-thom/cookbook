import { call, put, takeEvery, takeLatest, all } from "redux-saga/effects";
import * as Constants from "../redux/Recipes/constants";

import * as Actions from "../redux/Recipes/actions"
import * as api from '../services/api';

// export function* getRecipes() {
//   // const {recipes} = action.payload
//   try {
//     // API call
//     console.log("pushing recipes:")
//     yield put(ACTIONS.setIsFetchingRecipes(true))
//     const response = yield call('http://localhost:8000/api/recipes')
//     console.log(response)
//     // yield put(ACTIONS.receiveGetRecipes(["Bananase", "Apples","Beans"]));
//     yield put(ACTIONS.setIsFetchingRecipes(false))
//   } catch (error) {
//     console.log("error")
//   }
// }


export function* fetchRecipes() {
  console.log('Fetching recipes')
  try {
    console.log('Fetching recipes')
    const response = yield call(api.fetchRecipes)
    console.log('response data', response.data )
    yield put(Actions.fetchRecipesSuccess(response.data))
  } catch(error) {
    console.log(error)
    // yield put(Actions.fetchRecipesFailure(error))
  }
}

export default function* watcher() {
  yield all([
    takeLatest(Actions.fetchRecipes, fetchRecipes)
  ])
}

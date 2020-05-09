import { all } from 'redux-saga/effects';

import recipesSaga from './Recipes';
import usersSaga from './Users';


export default function* rootSaga() {
    yield all([
        recipesSaga(),
        usersSaga()
    ])
}

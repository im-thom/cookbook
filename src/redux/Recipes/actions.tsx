import { createAction } from 'redux-actions';
import * as CONSTANTS from './constants';


// export const requestGetRecipes = createAction(
//     CONSTANTS.REQUEST_GET_RECIPES, 
//     (recipes: any) => recipes
// );

// export const setIsFetchingRecipes = createAction(
//     'IS_FETCHING_USER',
//     (isFetching: boolean) => isFetching
// )

// export const receiveGetRecipes = createAction(
//     CONSTANTS.RECEIVE_GET_RECIPES, 
//     (recipes: any) => recipes
// );

export const fetchRecipes = createAction(
    'FETCH_RECIPES',
  );
  
  export const fetchRecipesSuccess = createAction(
    CONSTANTS.FETCH_RECIPES_SUCCESS,
    (recipes: any) => recipes
  );
  
  export const fetchRecipesFailure = createAction(
    CONSTANTS.FETCH_RECIPES_FAILURE,
    (error: any) => error
  );
  
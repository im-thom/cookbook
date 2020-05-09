// import { REQUEST_GET_RECIPES, RECEIVE_GET_RECIPES } from './actions';
import { handleActions } from "redux-actions";
import * as ACTIONS from "./actions";
import { fetchRecipes, fetchRecipesSuccess, fetchRecipesFailure} from "./actions"


// export default (state = "", action) => {
//   switch (action.type) {
//     case ACTIONS.REQUEST_GET_RECIPES:
//       console.log("Request get recipes");
//       return state;
//     case ACTIONS.RECEIVE_GET_RECIPES:
//       console.log("Receive get recipes");
//       console.log(action);
//       return action.payload;
//     default:
//       return state;
//   }
// };

// interface RecipesState {
//   recipes: any,
// }

// export const initialState: RecipesState = {
//   recipes: []
// }

const initialState = {
}

const reducer = handleActions(
  {
    [fetchRecipes]: (state, { payload }) => (
    {
      ...state,
      loading: true
    }
    ),
    [fetchRecipesSuccess]: (state, { payload }) => (
      {
      ...state,
      recipes: payload
    }),
    [fetchRecipesFailure]: (state, { payload }) => (
      {
      ...state,
      error: payload
    }),
  },
  initialState,
);

export default reducer;

import { combineReducers } from "redux";

import recipes from './Recipes';
import user from './User';



export default combineReducers({
    recipes,
    user
})

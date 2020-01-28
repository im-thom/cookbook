import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import FilterTag from './components/FilterTag';

const App = () => {
	return (
		<div className="container">
			<SearchBar />
			<div className="recipe-grid">
				<RecipeCard
					recipeName="Recipe Name"
					recipeImg={"/images/food.jpg"}
					recipeCookTime={"10min."}
					recipeRating={"****"}
					recipeLink={"#"}
				/>
				<RecipeCard
					recipeName="Another Recipe"
					recipeImg={"/images/food.jpg"}
					recipeCookTime={"45min."}
					recipeRating={"*****"}
					recipeLink={"#"}
				/>
				<RecipeCard
					recipeName="Recipe Name"
					recipeImg={"/images/food.jpg"}
					recipeCookTime={"10min."}
					recipeRating={"****"}
					recipeLink={"#"}
				/>
				<RecipeCard
					recipeName="Another Recipe"
					recipeImg={"/images/food.jpg"}
					recipeCookTime={"45min."}
					recipeRating={"*****"}
					recipeLink={"#"}
				/>
			</div>
		</div>
	);
};

export default App;
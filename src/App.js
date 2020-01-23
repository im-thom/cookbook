import React from 'react';
import RecipeCard from './components/RecipeCard';

const App = () => {
	return (
		<div className="container">
			<div className="recipe-grid">
				<RecipeCard
					recipeName="Recipe Name"
					recipeImg={"/images/food.jpg"}
					recipeCookTime={"10min."}
					recipeRating={"****"}
				/>
				<RecipeCard
					recipeName="Another Recipe"
					recipeImg={"/images/food.jpg"}
					recipeCookTime={"45min."}
					recipeRating={"*****"}
				/>
			</div>
		</div>
	);
};

export default App;
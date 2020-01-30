import React from 'react';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import FilterTag from './components/FilterTag';

const App = () => {
	const recipeTiles = recipes.map((recipe, i) => {
		const tagPills = recipe.tags.cuisine.map((tag, i)  => {
			console.log("here's I", i);
			return (
				<span key={i}>
					<FilterTag
						tagName={tag}
					/>
				</span>
			);
		});
		
		return(
			<RecipeCard key={i}
				recipeName={recipe.recipeName}
				recipeImg={recipe.recipeImg}
				recipeCookTime={recipe.recipeCookTime}
				recipeRating={recipe.recipeRating}
				recipeLink={recipe.recipeLink}
			>
				{tagPills}
			</RecipeCard>
		);
	});
	
	return (
		<div className="container">
			<SearchBar 
				accountImage={"../images/account.jpg"}
			/>
			<div className="recipe-grid">
				{recipeTiles}
			</div>
		</div>
	);
};

const recipes = [
	{
		recipeName: "Recipe Name",
		recipeImg: "/images/food.jpg",
		recipeCookTime: 40,
		recipeRating: "****",
		recipeLink: "#",
		tags: {
			cuisine: [
				"amer.",
			],
			expense: 1,
		}
	}, 
	
	{
		recipeName: "Another Name",
		recipeImg: "/images/food.jpg",
		recipeCookTime: 10,
		recipeRating: "****",
		recipeLink: "#",
		tags: {
			cuisine: [
				"amer.",
				"korean",
				"italian"
			],
			expense: 1,
		}
	},
];

export default App;
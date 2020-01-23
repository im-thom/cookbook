import React from 'react';

const RecipeCard = (props) => {
	return (
		<a className="card recipe-card">
			<div className="col-container">
				<div className="col">
					<img className="img card recipe-img" src={props.recipeImg} />
				</div>
				<div className="col" id="recipe-content">
					<h2 className="recipe-name">{props.recipeName}</h2>
					<div className="recipe-info">
						<p>{props.recipeCookTime}</p>
						<p>{props.recipeRating}</p>
					</div>
				</div>
			</div>
		</a>
	);
};

export default RecipeCard;
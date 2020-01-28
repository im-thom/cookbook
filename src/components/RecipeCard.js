import React from 'react';
import FilterTag from './FilterTag';

const RecipeCard = (props) => {
	return (
		<a className="card recipe-card" href={props.recipeLink}>
			<div className="col-container">
				<div className="col">
					<img className="img card recipe-img" src={props.recipeImg} />
				</div>
				<div className="col" id="recipe-content">
					<h2 className="recipe-name">{props.recipeName}</h2>
					<div className="recipe-info">
						<p>{props.recipeCookTime} | {props.recipeRating}</p>
					</div>
				</div>
			</div>
			<div className="filters">
				<FilterTag
					tagName="amer."
				/>
				<FilterTag
					tagName="$$$"
				/>
			</div>
		</a>
	);
};

export default RecipeCard;
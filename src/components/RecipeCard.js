import React from 'react';
import {Link} from 'react-router-dom';
import FilterTag from './FilterTag';

const RecipeCard = (props) => {
	return (
		<Link className="card recipe-card" to={`/recipe/${props.id}/${props.recipeName}`}>
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
			
			{props.children}
		</Link>
	);
};

export default RecipeCard;
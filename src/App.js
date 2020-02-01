import React from "react";
import SearchBar from "./components/SearchBar";
import RecipeCard from "./components/RecipeCard";
import FilterTag from "./components/FilterTag";
import axios from "axios";

import LandingPage from "./pages/LandingPage"
import SignInPage from "./pages/SignInPage"
import * as ROUTES from "./constants/routes";
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';


const App = () => (
  <Router>
    <Route exact path={ROUTES.LANDING} component={LandingPage} />
    <Route path={ROUTES.SIGN_IN} component={SignInPage} />
  </Router>

)

// class App extends React.Component {
//   state = {
//     menuIsOpen: false,
//     recipes: []
//   };

//   async componentDidMount() {
//     try {
//       const recipes = await axios.get(
//         "http://us-central1-cookbook-f485f.cloudfunctions.net/get_all_recipes",
//         {
//           Headers: {
//             "Content-Type": "application/x-www-form-urlencoded"
//           }
//         }
//       );
//       this.setState({
//         recipes
//       });
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   toggleMenu() {
//     this.setState({ menuIsOpen: !this.state.menuIsOpen });
//   }

//   handleChange(value) {
//     this.setState({ term: value });
//   }

//   render() {
//     const recipeTiles = this.state.recipes.map((recipe, i) => {
//       const tagPills = recipe.tags.cuisine.map((tag, i) => {
//         return (
//           <span key={i}>
//             <FilterTag tagName={tag} />
//           </span>
//         );
//       });

//       return (
//         <RecipeCard
//           key={i}
//           recipeName={recipe.recipeName}
//           recipeImg={recipe.recipeImg}
//           recipeCookTime={recipe.recipeCookTime}
//           recipeRating={recipe.recipeRating}
//           recipeLink={recipe.recipeLink}
//         >
//           {tagPills}
//         </RecipeCard>
//       );
//     });

//     return (
//       <>
//         <div className="container">
//           <SearchBar
//             term={this.state.term}
//             handleChange={value => this.handleChange(value)}
//             toggleMenu={() => this.toggleMenu()}
//             accountImage={"../images/account.jpg"}
//           />
//           <div className="recipe-grid">{recipeTiles}</div>
//         </div>
//         {this.state.menuIsOpen && <div className="menu-overlay">menu</div>}
//       </>
//     );
//   }
// }

// const recipes = [
// 	{
// 		recipeName: "Recipe Name",
// 		recipeImg: "/images/food.jpg",
// 		recipeCookTime: 40,
// 		recipeRating: "****",
// 		recipeLink: "#",
// 		tags: {
// 			cuisine: [
// 				"amer.",
// 			],
// 			expense: 1,
// 		}
// 	},

// 	{
// 		recipeName: "Another Name",
// 		recipeImg: "/images/food.jpg",
// 		recipeCookTime: 10,
// 		recipeRating: "****",
// 		recipeLink: "#",
// 		tags: {
// 			cuisine: [
// 				"amer.",
// 				"korean",
// 				"italian"
// 			],
// 			expense: 1,
// 		}
// 	},

// 	{
// 		recipeName: "Another Name",
// 		recipeImg: "/images/food.jpg",
// 		recipeCookTime: 10,
// 		recipeRating: "****",
// 		recipeLink: "#",
// 		tags: {
// 			cuisine: [
// 				"amer.",
// 				"korean",
// 				"italian"
// 			],
// 			expense: 1,
// 		}
// 	},

// 	{
// 		recipeName: "Another Name",
// 		recipeImg: "/images/food.jpg",
// 		recipeCookTime: 10,
// 		recipeRating: "****",
// 		recipeLink: "#",
// 		tags: {
// 			cuisine: [
// 				"amer.",
// 				"korean",
// 				"italian"
// 			],
// 			expense: 1,
// 		}
// 	},
// ];

export default App;

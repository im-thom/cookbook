import React from "react";
import { AuthUserContext } from "../components/session";
import SignOutButton from "../components/SignOutButton";
import SignInLink from "../pages/SignInPage";
import axios from "axios";
import FilterTag from "../components/FilterTag";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import Navbar from "../components/nav"
// const HomePage = () => {
//   return (
//     <AuthUserContext.Consumer>
//       {authUser => authUser ? <SignOutButton /> : <SignInLink />}

//     </AuthUserContext.Consumer>
//   );
// };

class HomePage extends React.Component {
  state = {
    menuIsOpen: false,
    recipes: []
  };

  async componentDidMount() {
    try {
      const recipes = await axios.get(
        "http://us-central1-cookbook-f485f.cloudfunctions.net/get_recipes",
        {
          Headers: {
            "Content-Type": "application/json"
          }
        }
      );

      console.log("RECIPES!: ", recipes);
      this.setState({
        recipes: recipes.data
      });
    } catch (error) {
      console.log(error);
    }
  }

  toggleMenu() {
    this.setState({ menuIsOpen: !this.state.menuIsOpen });
  }

  handleChange(value) {
    this.setState({ term: value });
  }



  recipeTiles = () => {
    
    // Loop to render recipe items
    return this.state.recipes.map((recipe, i) => {

      // Loop to render tags
      const tagPills = recipe.tags.map((tag, i) => {
        return (
          <span key={i}>
            <FilterTag tagName={tag} />
          </span>
        );
      });

      return (
        <RecipeCard
          key={i}
          recipeName={recipe.name}
          recipeImg={recipe.image}
          recipeCookTime={recipe.duration.cook}
          recipeRating={recipe.rating}
        >
          {tagPills}
        </RecipeCard>
      );
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <SearchBar
            term={this.state.term}
            handleChange={value => this.handleChange(value)}
            toggleMenu={() => this.toggleMenu()}
            accountImage={"../images/account.jpg"}
          />
          <div className="recipe-grid">{this.recipeTiles()}</div>
        </div>
        {this.state.menuIsOpen && <div className="menu-overlay">
            <Navbar />
          </div>}
      </>
    );
  }
}

export default HomePage;

import React, { Component } from 'react';
import { } from '../../sagas';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'antd';

import { fetchRecipes } from "../../redux/Recipes/actions"

const RecipeListLayout = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}

class RecipesPage extends Component {

    componentDidMount() {
        this.props.fetchRecipes()
    }
    
    render() {
        console.log('PROPS: ', this.props)
        console.log('STATE: ', this.state)
        return (
            <div>
                <RecipeListLayout>
                {this.props.recipes && this.props.recipes.map(recipe => {
                    const {name, description, image } = recipe.data
                    return (
                        <Card
                        hoverable
                        style={{ width: 240 }}
                        cover={<img alt={name} src={image} />}
                        link={'/beans'}
                    >
                            <Card.Meta title={name} description={description} />
                        </Card>
                    )
                }
                )}
                </RecipeListLayout>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
    recipes: state.recipes.recipes
})

const mapDispatchToProps = {
    fetchRecipes
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesPage)
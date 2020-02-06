import React, {Component} from 'react';

class RecipePage extends Component {
    componentDidMount() {
        
    };
    
    render() {
        return (
            <div>
                recipe page for {this.props.match.params.id} {this.props.match.params.recipeName}
            </div>
        );
    };
};

export default RecipePage;
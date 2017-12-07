import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Recipe from './recipe';
import './recipe-list.css';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: "Spaghetti",
                instructions: "Open jar of spaghetti sauce. Pour into pot. Heat until warm. In another pot, boil noodles.",
                ingredients: ["1 jar of spaghetti sauce", "8 cups of water", "1 box of spaghetti noodles"],
                img: "spaghetti.jpg"
            },
            {
                title: "Milkshake",
                instructions: "Combine ice cream and milk. Blend until creamy.",
                ingredients: ["2 scoops ice cream", "8 ounces of milk"],
                img: "milkshake.jpeg"
            },
            {
                title: "Avocado Toast",
                instructions: "Toast bread. Slice avocado and smear on bread.",
                ingredients: ["2 slices of bread", "1 avocado"],
                img: "avocadotoast.jpeg"
            }
        ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }
    
    render() {
        const recipes = this.props.recipes.map((r, index) =>(
            <Recipe key={index} {...r} />
        ));
    
    return(
        <div className="recipe-list">
            {recipes}
        </div>   
    );
    
    }
}

export default RecipeList;
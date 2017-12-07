import React, { Component } from 'react';
import Navbar from './navbar';
import RecipeList from './recipe-list';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;

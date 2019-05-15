import React, { Component } from 'react';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import { Route } from 'react-router-dom';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = [...this.state.savedList];
    if(this.state.savedList.some( mov => mov.id )) return;
    savedList.push(movie);
    this.setState({ savedList });
  };

  removeFromSavedList = movie => {
    const savedList = [...this.state.savedList];
    savedList.pop(movie);
    this.setState({ savedList });
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
    <Route exact path="/movies/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList} removeFromSavedList={this.removeFromSavedList} /> } />
      </div>
    );
  }
}

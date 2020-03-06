import React, { Component } from 'react';
import './App.css';

import BreedSelect from './BreedSelect.js';
import loading_gears from './images/loading_gears.svg';

class App extends Component {
  state = {
    breeds: [],
    selectedBreed: 'All Breeds',
    randomDog: '',
    loading: false
  };

  componentDidMount() {
    this.getBreeds();
    this.getRandomDog();
  }

  getBreeds = () => {
    fetch('/api/breeds')
    .then((response) => {
      return response.json();
     })
     .then((body) => {
       this.setState({ breeds: body });
     })
  };

  getRandomDog = () => {
    this.setState({ loading: true });
    fetch(`/api/randomDog?breed=${this.state.selectedBreed}`)
    .then((response) => {
      return response.json();
     })
     .then((body) => {
       this.setState({ randomDog: body.message, loading: false });
     })
  };

  handleBreedChange = (event) => {
    this.setState({ selectedBreed: event.target.value });
  }

  render() {
    return (
      <div id='App'>
        <h1 id='title'>Fetcher</h1>
        <button id='fetch-button' onClick={this.getRandomDog}>Fetch!</button>
        <BreedSelect breeds={this.state.breeds} handleBreedChange = {(event) => this.handleBreedChange(event)} />
        {this.state.loading ? <span>Loading...</span> : <img id='dog-image' src={this.state.randomDog} alt='Random Dog' />}
      </div>
    );
  }
}

export default App;

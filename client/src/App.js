import React, { Component } from 'react';
import './App.css';

import BreedSelect from './BreedSelect.js';
import loading_gears from './images/loading_gears.svg';

class App extends Component {
  state = {
    breeds: [],
    selectedBreed: 'All Breeds',
    randomDog: '',
    fetching: false,
    imageLoading: true
  };

  componentDidMount() {
    this.getBreeds();
    this.getRandomDog();
  }

  getBreeds = () => {
    this.setState({ fetching: true });
    fetch('/api/breeds')
      .then((response) => {
        return response.json();
       })
       .then((body) => {
         this.setState({ breeds: body, fetching: false });
       })
  };

  getRandomDog = () => {
    this.setState({ fetching: true });
    fetch(`/api/randomDog?breed=${this.state.selectedBreed}`)
    .then((response) => {
      return response.json();
     })
     .then((body) => {
       this.setState({ randomDog: body.message, fetching: false, imageLoading: true });
     })
  };

  handleBreedChange = (event) => {
    this.setState({ selectedBreed: event.target.value });
  }

  handleImageLoad = () => {
    this.setState({ imageLoading: false });
  }

  render() {
    return (
      <div id='App'>
        <h1 id='title'>Fetcher</h1>
        <button id='fetch-button' onClick={this.getRandomDog}>Fetch!</button>
        <BreedSelect breeds={this.state.breeds} handleBreedChange = {(event) => this.handleBreedChange(event)} />
        {this.state.fetching || this.state.imageLoading && <img id='loading-gears' src={loading_gears} alt='Loading Gears' />}
        <img id='dog-image' src={this.state.randomDog} style={{visibility: this.state.imageLoading ? 'hidden' : 'visible'}} alt='Random Dog' onLoad={() => this.handleImageLoad()} />
      </div>
    );
  }
}

export default App;

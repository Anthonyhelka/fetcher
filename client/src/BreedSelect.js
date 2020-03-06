import React, {Component} from 'react';

const BreedSelect = (props) => {
  let breeds = props.breeds.map((breed) => <option key={breed.name} value={breed.name}>{breed.name}</option>);
  return (
    <select id='breed-select' name="breedSelect" onChange={props.handleBreedChange}>
      <option>All Breeds</option>
      {breeds}
    </select>
  )
}

export default BreedSelect;

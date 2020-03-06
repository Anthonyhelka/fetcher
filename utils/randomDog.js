const request = require('request');

const randomDog = (breed, callback) => {
  let url;
  breed === 'All Breeds' ? url = 'https://dog.ceo/api/breeds/image/random' : url = `https://dog.ceo/api/breed/${breed.toLowerCase()}/images/random`;
  request({ url }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to Dog API!', undefined);
    } else if (body.status === 'error') {
      callback('Unable to find dogs. Try changing your search!', undefined);
    } else {
      callback(undefined, body);
    }
  });
}

module.exports = randomDog;

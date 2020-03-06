const request = require('request');

const breeds = (callback) => {
  const url = 'https://dog.ceo/api/breeds/list/all';

  request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
      callback('Unable to connect to Dog API!', undefined);
    } else if (body.status === 'error') {
      callback('Unable to find breeds. Try changing your search!', undefined);
    } else {
      const breeds = Object.keys(body.message).map((breed) => {
        return { name: `${breed.charAt(0).toUpperCase()}${breed.substring(1)}` };
      })
      callback(undefined, JSON.stringify(breeds));
    }
  });
}

module.exports = breeds;

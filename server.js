const express = require('express');
const path = require('path');
const breeds = require('./utils/breeds.js');
const randomDog = require('./utils/randomDog.js');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/breeds', (req, res) => {
  breeds((error, data) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send(data);
    }
  });
});

app.get('/api/randomDog', (req, res) => {
  randomDog(req.query.breed, (error, data) => {
    if (error) {
      return res.send(error);
    } else {
      return res.send(data);
    }
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

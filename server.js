const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/api/products', (req, res) => {
  res.send({
    products: [
      {
        label: 'Red Book',
        price: 5
      },
      {
        label: 'Backpack',
        price: 35
      },
      {
        label: 'Pens',
        price: 3
      }
    ]
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));

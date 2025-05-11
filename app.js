const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


const v1Routes = require('./routes/v1');


app.use('/v1', v1Routes);

app.get('/', (req, res) => {
  res.send('Latinia Mock API is running');
});

app.use((req, res) => {
  res.status(404).send('Route not found');
});

module.exports = app;

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const {Event, User} = require('./models')

const app = express();

const PORT = 3000;

app.use(bodyParser());
app.use(cors());
app.use(logger('dev'));

//test if server is set up
app.get('/', (req, res) => {
  res.json({res: "Event Planner app initiated"})
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

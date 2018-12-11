const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

//import utilities for tokens
const jwt = require('jsonwebtoken');
const SECRET = "test token if it works";
const sign = (payload) => jwt.sign(payload, SECRET);

//utilities for passport
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const passport = require('passport');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

passport.use(new JwtStrategy(opts, async (payload, done) => {
  try {
    const user = await User.findByPk(payload.id);
    return done(null, user);
  } catch(e) {
    return done(e, false);
  }
}));


//server
const {Event, User} = require('./models')

const { eventRouter } = require('./routes/event');
const { userRouter } = require('./routes/user');

const app = express();

const PORT = 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

//test if server is set up
app.get('/', (req, res) => {
  res.json({res: "Event Planner app initiated"})
})

//Ester
//Register a user
app.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    const { id, username} = user.dataValues;
    const token = sign({
      id,
      username
    });
    res.json({user, token});
  } catch(e) {
    console.log(e);
    res.status(500).json({msg: e.message});
  }
});

//Ester   --- Do not forget to make the username unique
app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({where: {username: req.body.username}});
    const isVerified = await bcrypt.compare(req.body.password, user.dataValues.password);
    // check if it's the right password
    if(isVerified){
      const { id, username} = user.dataValues;
      const token = sign({
        id,
        username
      });
      res.json({user, token});
    }
    else{
      res.json({msg: "invalid login"});
    }
  } catch(e) {
    console.log(e);
    res.status(500).json({msg: e.message});
  }
});

//test if passport works
app.get('/events', passport.authenticate('jwt', { session: false }), async (req, res) => {
  try{
    const events = await Event.findAll()
    res.json(events)
  }
  catch(e){
    res.status(500).json({
      msg: e.message
    })
  }
});

// //test if passport works
// app.get('/events', passport.authenticate('jwt', { session: false }), async (req, res) => {
//   try{
//     const events = await Event.findAll()
//     res.json(events)
//   }
//   catch(e){
//     res.status(500).json({
//       msg: e.message
//     })
//   }
// });

//steve
app.use('/events', eventRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

module.exports = {
  passport,
  sign
};

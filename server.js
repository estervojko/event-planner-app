const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const SECRET = "test token if it works";
const sign = (payload) => jwt.sign(payload, SECRET);
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const passport = require('passport');

const opts = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: SECRET
};

module.exports = passport.use(new JwtStrategy(opts, async (payload, done) => {
  try {
    const user = await User.findByPk(payload.id);
    return done(null, user);
  } catch (e) {
    return done(e, false);
  }
}));

//server
const {Event, User, Comment} = require('./models');
const { eventRouter } = require('./routes/event');
const { userRouter } = require('./routes/user');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));

app.get('/', (req, res) => {
  res.json({res: "Event Planner app initiated"})
})

app.post('/register', async (req, res) => {
  try {
    const user = await User.create(req.body);
    const {id, username, first_name, last_name, address} = user.dataValues;
    const token = sign({id, username, first_name, last_name, address});
    res.json({user, token});
  } catch (e) {
    console.log(e);
    res.status(500).json({msg: e.message});
  }
});


app.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username
      }
    });
    const isVerified = await bcrypt.compare(req.body.password, user.dataValues.password);
    if (isVerified) {
      const {id, username, first_name, last_name, address} = user.dataValues;
      const token = sign({id, username});
      res.json({user, token});
    } else {
      res.json({msg: "invalid login"});
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({msg: e.message});
  }
});

//get all comments per specific event
app.get('/events/:id/comments', async(req, res) => {
  try{
    const commmentsOfEvent = await Comment.findAll({where: {event_id: parseInt(req.params.id)}})
    res.json(commmentsOfEvent);
  }
  catch(e){
    res.status(500).json({
      msg: e.message
    })
  }
})

//post a comment in an event
app.post('/users/:id1/events/:id2/comments',async(req, res) => {
  try{
    console.log("userid", req.params.id1)
    if(req.params.id1 !== 'anon') {
      console.log("gets here")
      const user = await User.findOne({where: {id: parseInt(req.params.id1)}});
      const event = await Event.findOne({where: {id: parseInt(req.params.id2)}});
      const comment = await Comment.create(req.body);
      await event.addComment(comment)
      await user.addComment(comment)
      res.json(comment);
    }
    else {
      console.log("gets belowww")
      const event = await Event.findOne({where: {id: parseInt(req.params.id2)}});
      const comment = await Comment.create(req.body);
      await event.addComment(comment)
      res.json(comment);
    }

  }
  catch(e){
    res.status(500).json({
      msg: e.message
    })
  }
})


//steve
app.use('/events', eventRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})

module.exports = {
  sign
}

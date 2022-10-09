const express = require('express')
const app = express()
const port = 4000

const cookiePaser = require('cookie-parser');

const config = require('./config/key');
const { auth } = require('./middlewawre/auth');
// Model - Schema User
const { User } = require("./models/User");

// bodyParser
const bodyParser = require('body-parser');
// application/x-www.form-urlenconded
app.use(bodyParser.urlencoded({extended: true}));
// application/json
app.use(bodyParser.json());
app.use(cookiePaser());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
}).then(()=> console.log('MongoDb Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! hello hello')
})

app.post('api/user/register', (req, res) => {
  // sign up date - > put db

    const user = new User(req.body)
    // mongo db methode
    user.save((err, userInfo) => {
      if (err) return res.json({ success: false, err})
      return res.status(200).json({
        success: true
      })
    })
})

app.post('/api/user/login', (req, res) => {

  // console.log("hiihihihihihihihi");
  User.findOne({ email: req.body.email }, (err, userInfo) =>{
    if (!userInfo)
    {
      return res.json({
        loginSuccess: false,
        message: "no matching user email"
      })
    }


    userInfo.comparePassword(req.body.password, (err, isMatch) => {
      if (!isMatch)
      return res.json({loginSuccess: false, message: "wrong password"})

      userInfo.generateToken((err, user)=> {
        if (err) return res.status(400).send(err);

        res.cookie("x_auth", user.token)
        .status(200)
        .json({loginSuccess: true, userId: user._id})

      })
    })

  })
} )

app.get('/api/user/auth', auth, (req, res) => {

  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name,
    lastname: req.user.lastname,
    role: req.user.role,
    image: req.user.image
  })
})

app.get('/api/user/logout', auth, (req, res) => {
  User.findOneAndUpdate({_id: req.user._id}, { token: ""}, (err, user) => {
    if (err) return res.json({ success: false, err});
    return res.status(200).send({
      success: true
    })
  })
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

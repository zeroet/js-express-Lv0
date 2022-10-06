const express = require('express')
const app = express()
const port = 4000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://seyun:seyun123@boilerplate.fbopivw.mongodb.net/?retryWrites=true&w=majority', {
}).then(()=> console.log('MongoDb Connected...'))
  .catch(err => console.log(err))

  
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

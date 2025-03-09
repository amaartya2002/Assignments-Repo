const express = require('express')
const bodyParser = require('body-parser')
const { adminRouter } = require('./routes/admin')
const { userRouter } = require('./routes/user')
const connectDB = require('./config/dbconfig')
const SECRET_KEY = 'AAJKIBAAT'


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
//app.use(bodyParser.json())


app.use('/admin', adminRouter)
app.use('/user', userRouter)


connectDB()
  .then(() => {

    console.log('Connected to DB successfully');

    app.listen(3000, () => {
      console.log('Port listening on 3000..');
    })

  })
  .catch((err) => {
    console.log('Error: ' + err.message);
  })



module.exports = SECRET_KEY
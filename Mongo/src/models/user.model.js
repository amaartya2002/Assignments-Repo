const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'Course'
  }
})


const User = mongoose.model('User', userSchema)


module.exports = User
const mongoose = require('mongoose')


const connectDB = async () => {

  try {

    await mongoose.connect("mongodb+srv://amartyakumar2001:XIzdTTMcoFKvE470@cluster0.8dzco.mongodb.net/course_selling_app")
    //console.log(connection);  => return a very big mongoose object

  } catch (err) {
    console.log("ERROR : " + err.message);
  }

}




module.exports = connectDB;

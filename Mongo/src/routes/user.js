const express = require('express')
const { User, Course } = require('../models/index')
const { userMiddleware } = require('../middelwares/index')
const router = express.Router()


router.post('/signup', async (req, res) => {
  try {
    const { username, password } = req.body

    const userCreated = await User.create({
      username,
      password
    })

    if (!userCreated) {
      res.status(401).json({
        msg: "User not created"
      })
    } else {
      res.json({
        msg: "user created succesfully!!"
      })
    }
  } catch (error) {
    console.log("ERROR: " + error.message);
  }
})


router.get('/courses', async (req, res) => {

  try {
    const courses = await Course.find({})

    if (!courses) {
      res.status(401).send("Not able to extract courses")
    } else {
      res.status(201).json({
        courses
      })
    }
  } catch (error) {
    console.log("ERROR: " + error.message);
  }

})


// For a existing user add a new course which user buyes now!!
router.put('/courses/:courseId', userMiddleware, async (req, res) => {

  try {
    const courseId = req.params.courseId

    const username = req.headers.username

    await User.updateOne({
      username
    }, {
      "$push": {
        purchasedCourses: courseId
      }
    })

    res.json({
      msg: "course updated !!"
    })
  } catch (error) {

    console.log("ERROR: " + error.message);

  }

})



router.get('/purchasedCourses', userMiddleware, async (req, res) => {

  const username = req.headers.username

  const user = await User.findOne({
    username
  })

  const purchasedCourses = user.purchasedCourses

  // const courses = await Promise.all(
  //   purchasedCourses.map(courseId => Course.findById(courseId))
  // );

  const courses = await Course.find({
    _id: {
      "$in": purchasedCourses
    }
  })

  res.json({
    courses
  })


})






module.exports = {
  userRouter: router
}
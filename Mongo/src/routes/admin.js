const express = require('express')
const { adminMiddleware } = require('../middelwares')
const { Admin, Course } = require('../models')
const { AsyncIterableUtil } = require('puppeteer')
const router = express.Router()


router.post('/signup', async (req, res) => {
  try {

    console.log("received body ", req.body);

    const username = req.body.username
    const password = req.body.password

    if (!username) {
      return res.status(401).json({
        ERROR: "provide username"
      })
    }

    // check if the username already exists
    const existingUser = await Admin.findOne({
      username
    })

    if (existingUser) {
      return res.status(401).json({
        'EROR': "User already exists"
      })
    } else {

      await Admin.create({
        username,
        password
      })

      res.json({
        message: "Admin created successfully!!"
      })
    }
  } catch (error) {

    console.log("ERROR: " + error.message);

  }



})


router.get('/courses', adminMiddleware, async (req, res) => {

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

router.post('/courses', adminMiddleware, async (req, res) => {
  try {
    const { title, description, price, imageLink } = req.body

    if (!title || !description || !price || !imageLink) {
      return res.status(401).json({
        "ERROR ": "Missing elements"
      })
    }

    const course = await Course.create({

      title,
      description,
      price,
      imageLink

    })


    res.status(201).json({
      "message": "Course created successfully",
      "courseId": course._id
    })

  }
  catch (error) {
    console.log("ERROR: " + error.message);
  }
})



module.exports = {
  adminRouter: router
}
const { Admin } = require('../models')
const SECRET_KEY = require('../index')

async function adminMiddleware(req, res, next) {

  try {

    const username = req.headers.username;
    const password = req.headers.password;

    if (!username || !password) {
      return res.status(400).json({ error: "Username and password are required" });
    }


    const user = await Admin.findOne({
      username: username,
      password: password
    })

    if (!user) {
      return res.status(403).json({ error: "Admin doesn't exist" });
    } else {
      next()
    }

  } catch (error) {

    console.log("ERROR: " + error.message);


  }




}



function adminMiddlewareWithJWT(req, res, next) {

  try {

    const token = req.headers.authorization;

    const words = token.split(" ")

    const jwtToken = words[1]

    const payload = jwtToken.verify(jwtToken, SECRET_KEY)

    if (payload.username) {
      next();
    } else {
      res.status(403).json({
        msg: "Invalid Credationals"
      })
    }

  } catch (error) {

    console.log("ERROR: " + error.message);

  }
}

module.exports = {
  adminMiddleware,
  adminMiddlewareWithJWT
}
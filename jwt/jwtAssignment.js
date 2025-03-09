const jwt = require('jsonwebtoken')
const express = require('express')
const zod = require('zod')

const app = express()

const SECRET_KEY_FOR_GENERATION_AND_VERIFICATION = 'AAJNHIKALAANA'

const mySchemaUsername = zod.string().email()
const mySchemaPassword = zod.string().min(6)

function signJwt(username, password) {

  if (!mySchemaUsername.safeParse(username).success || !mySchemaPassword.safeParse(password).success) {
    return null
  }


  const token = jwt.sign(username, SECRET_KEY_FOR_GENERATION_AND_VERIFICATION)

  return token;

}


function decodeJwt(token) {

  const decodedJwtToken = jwt.decode(token)

  if (decodedJwtToken) {
    return true
  }

  return false

}


function verifyJwt(token) {

  let verified = false;

  try {

    // verify throws an exception so it acts diffrently
    jwt.verify(token, SECRET_KEY_FOR_GENERATION_AND_VERIFICATION)
    return verified = true;

  } catch (error) {
    return verified;
  }



}

const ans = verifyJwt("sImFjY291bnRJZCI6IkFtYXJ0eWFAS3VtYXIiLCJpYXQiOjE3NDA4MTQxOTF9.99xnb8NEfieAnImQeLKtgVvaliRvL - 1sJzyvIcIXfrw", SECRET_KEY_FOR_GENERATION_AND_VERIFICATION)
console.log(ans);



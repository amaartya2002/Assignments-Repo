const jwt = require('jsonwebtoken')

const SECRET_KEY_FOR_GENERATION_AND_VERIFICATION = 'AAJNHIKALAANA'

const payload = {
  name: "Amartya",
  accountId: "Amartya@Kumar"
}


// Generation of token from a server with your info and a secret thing what only servers have with them !!
const token = jwt.sign(payload, SECRET_KEY_FOR_GENERATION_AND_VERIFICATION)

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW1hcnR5YSIsImFjY291bnRJZCI6IkFtYXJ0eWFAS3VtYXIiLCJpYXQiOjE3NDA4MTM4ODl9.rkV-BanMA6uD9i6emBQxYctsxNSRiXvgaFUw1Jrzpkw
console.log(token);


// With your token anyone can decode your info like on what payloads you have generated the token but can't get the secret key because that's the thing only servers have with them
const decodedInfo = jwt.decode(token)

// { name: 'Amartya', accountId: 'Amartya@Kumar', iat: 1740813889 }
console.log(decodedInfo);

// Verification of token by the server when they are given any tokens in the headers or cookies with the secret key they have with them
const verifyToken = jwt.verify(token, SECRET_KEY_FOR_GENERATION_AND_VERIFICATION);

// { name: 'Amartya', accountId: 'Amartya@Kumar', iat: 1740814191 }
console.log(verifyToken);



/**
 * 
 * Both jwt.verify() and jwt.decode() returns the payload , but :
 * 
 * jwt.verify() -> verifies the token with the signatue and is used for authentication also it returns the payload
 * jwt.decode() -> it only returns the payload , there is no security associated with it
 * 
 *  
 */

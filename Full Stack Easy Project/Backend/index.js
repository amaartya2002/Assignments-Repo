// basic express boiler plate code
const express = require('express')
const { createTodo, updateTodo } = require('./types')
const app = express()

app.use(express.json());

/**
 * 
 * Todos might look like
 * {
 * title : "Todo Title"
 * description : "Description of Todo"
 * }
 * 
 */


app.get('/todos', (req, res) => {

  const TodoPayload = req.body

  const parsePayload = createTodo.safeParse(TodoPayload)

  if (!parsePayload.success) {
    res.status(401).json({
      msg: "Not a valid title or description"
    })
    return
  }





})


app.post('/todos', (req, res) => {

})


app.put('/todos/completed', (req, res) => {

  const updateTodoPayload = req.body
  const parsePayload = updateTodo.safeParse(updateTodoPayload)

  if (!parsePayload.success) {
    return res.status(401).json({
      mgs: "Not valid inputs"
    })
  }



})


app.listen(3000, () => {
  console.log("App listening on port 3000..");
})

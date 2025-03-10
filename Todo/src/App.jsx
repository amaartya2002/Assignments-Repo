import { useState } from "react";
// let state = {
//   count : 0
// }


/**
 * Global state
 * 
 * {
 * 
 * [{title : 'first task' , description : "This is the first todo" , completed : "false"},{},{},{}]
 * 
 * }
 * 
 */

function App() {

  const[todos,setTodos] = useState( [
  {title : "Gym" , description : "Gym from 7 to 9" , completed : false},
  {title : "Study" , description : "Study from 9 to 11" , completed : true},
  {title : "Movie" , description : "Movie from 11 to 2" , completed : true},
  {title : "Sleep" , description : "Sleep from 2 to 8" , completed : false}
]);

console.log(todos);



function onClickHandler(){
  setTodos([...todos,{
    title : 'random todo',
    description : 'add a random todo',
    completed: false
  }])
}

  return (
    <div>

      <button onClick={onClickHandler}>Add a random button</button>
      {
        todos.map((todo) => {
          return <Todo title={todo.title} description={todo.description}></Todo>
        })
      }

      <DarkButton></DarkButton>

    </div>

  )
}


function Todo(props){
  
  // console.log(props);
  const {title,description} = props

  return <div>
    <h2>{title}</h2>
    <h2>{description}</h2>
  </div>
  
}


function DarkButton(){

  console.log('I am also called!!');
  
  return <div>
    <button>My Dark Button</button>
  </div>
}



export default App

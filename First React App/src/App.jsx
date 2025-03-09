import { useState } from "react";
// let state = {
//   count : 0
// }

function App() {

  const[count,setCount] = useState(0);

  // console.log(useState(0));
  // console.log(count);
  // console.log(setCount);

  return (

    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>

  )
}


function CustomButton(props){

  console.log(props);

  const {count,setCount} = props;

  function onClickHandler(props){
    
    setCount(count+1); 
    
  }



  return(
    <button onClick={onClickHandler}>
      Counter {count}
    </button>
  )
}



export default App

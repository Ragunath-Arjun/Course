import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <Counter />
  )
}
function Counter(){
  let[Like,setLike]=useState(10);
  let[Dislike,setDislike]=useState(0);
  return(
    <>
    <button onClick={()=>setLike(Like+1)}> hi{Like} </button>
    <button onClick={()=>setDislike(Like+1)}> hi{Dislike} </button>
    <button onClick={()=>setLike(Like+1)}> hi{Like} </button>
    <button onClick={()=>setLike(Like+1)}> hi{Like} </button>
    <button onClick={()=>setLike(Like+1)}> hi{Like} </button>


    </>
  )
}
export default App;

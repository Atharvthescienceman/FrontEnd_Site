import { useState } from 'react'

import './App.css'


function SimpleCounter() {

    var [number,setNumber] = useState(0);
    // const [count, setCount] = useState(0)
    function add(){
      setNumber(number++)
    }
    function subtract(){
      setNumber(number--)
    }
    function Reset(){
      setNumber(0)
      
    }
  
  
    //  component is a structure which helps us to load dynamic content in website
    return (
      <>
      <h1>{number}</h1>
       <button onClick={add}>Increase</button>
       <button onClick={Reset}>Reset</button>
       <button onClick={subtract}>Decrease</button>
      </>
    )
  }
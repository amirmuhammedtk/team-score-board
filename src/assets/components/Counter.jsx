import React, { useState } from 'react'
import '../../App.css'

function Counter() {
  const [count,setCount]=useState(0)
  const [countsecond,setCountsecond]=useState(0)

  const countAdd=()=>{
    setCount(count+1)
  }
  const countSub=()=>{
    setCount(count-1)
  }

  const countPlus=()=>{
    setCountsecond(countsecond+1)
  }
  const countMin=()=>{
    setCountsecond(countsecond-1)
  }


  const clear=()=>{
    setCount(0)
    setCountsecond(0)
  }

  return (
    <div>
    <div className="counter">
    <u><h1>Score Board</h1></u> 
     <div className="main">
        <div className="box1">
            <h2>Team A</h2>
            <h3>{count}</h3>
            <button onClick={countAdd}>+</button>
            <button onClick={countSub}>-</button>
        </div>


        <div className="box2">
            <h2>Team B</h2>
            <h3>{countsecond}</h3>
            <button onClick={countPlus}>+</button>
            <button onClick={countMin}>-</button>
        </div>

       
     </div>
     <button className='clearbtn' onClick={clear}>Clear</button>
    </div>
    </div>
  )
}

export default Counter

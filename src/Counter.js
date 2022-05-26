import React,{useState} from 'react';

let Counter = () => {
    const [count,setCount]=useState(0);
  return (
    <div>
      <h1>Higher Order Component</h1>
      <h3>{count}</h3>
      <button onClick={()=>setCount(count+2)}>Update</button>
    </div>
  );
}

export default Counter;

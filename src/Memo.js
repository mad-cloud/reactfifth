import React,{useState,useMemo} from 'react';
let Memo=()=>{
  const [count,setCount]=useState(0);
  const [item,setItem]=useState(10);
  let CountMemo=useMemo(function multiCount(){ //When not using useMemo, on clicking the Update Item button, multiCount() was called which should not happen since multiCount() should be called only on clicking the Update Count button. Its like unusual re-rendering of state. So to prevent it, we use useMemo which will keep checking whether the render is linked with actual element. 
    console.warn('multicount');
    return count *5;
  },[count])
  return(
    <>
    <h1>Pure Component</h1>
    <h2>Count: {count}</h2>
    <h2>Item: {item}</h2>
    <h2>{CountMemo}</h2>
    <button onClick={()=>setCount(count+1)}>Update Count</button>
    <button onClick={()=>setItem(item*5)}>Update Item</button>
    </>
  )
}
export default Memo;
import React from 'react';
import Memo from './Memo';
import Counter from './Counter';
import HOCBlue from './HOCBlue';
import HOCGreen from './HOCGreen';
let App=()=>{
  return (
    <>
    <Memo />
    <Counter />
    <HOCBlue cmp={Counter} />
    <HOCGreen cmp={Counter} />
    </>
  )
}
export default App;
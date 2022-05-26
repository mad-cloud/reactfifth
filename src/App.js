import React from 'react';
import Memo from './components/Memo';
import Counter from './components/Counter';
import HOCBlue from './components/HOCBlue';
import HOCGreen from './components/HOCGreen';
let App=()=>{
  return (
    <>
    <Memo />
    <Counter />
    <HOCBlue cmp={Counter} /> {/*passing component Counter to HOCBlue component as props */}
    <HOCGreen cmp={Counter} /> {/*passing component Counter to HOCGreen component as props */}
    </>
  )
}
export default App;
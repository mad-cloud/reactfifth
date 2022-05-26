import React from 'react';

let HOCGreen = (props) => {
  return (
    <div>
      <h2 style={{backgroundColor:'green',width:600}}>Green <props.cmp /></h2>
    </div>
  );
}

export default HOCGreen;

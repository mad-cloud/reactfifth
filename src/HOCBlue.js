import React from 'react';
let HOCBlue = (props) => {
  return (
    <div>
      <h2 style={{backgroundColor:'blue',width:600}}>Blue <props.cmp /></h2>
    </div>
  );
}

export default HOCBlue;

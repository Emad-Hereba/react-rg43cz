import React, { useState } from 'react';

const Query = () => {
  let text = '';
  const [names, setNames] = useState([
    'Emad Hereba',
    'Emad Radwan',
    'Yahia Emad Hereba',
    'Ahmed Emad Hereba',
    'Youssif Emad Radwan',
  ]);
  // for (let i = 0; i < names.length; i++) text += names[i] + '<br/>';
  const removeit = () => {
    alert('under Construction');
    setNames(names.pop());
    alert(names);
  };
  return (
    <div>
     
      {names.map((s) => (
        <React.Fragment>
          {s}
          <br />
        </React.Fragment>
      ))}
      <br />
      <button onClick={removeit}>Remove</button>
    </div>
  );
};

export default Query;

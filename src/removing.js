import React, { useState } from 'react';

const Removit = () => {
  let text = '';
  const [names, setNames] = useState([
    'Emad Hereba',
    'Emad Radwan',
    'Yahia Emad Hereba',
    'Ahmed Emad Hereba',
    'Youssif Emad Radwan',
  ]);
  const counry=[
    'Espana Valencia',
    'New York USA',
    'England London',
    'Germany Berline',
    'Sweedem Stcokholm',
  ];
  
  // for (let i = 0; i < names.length; i++) text += names[i] + '<br/>';
  const removeit = () => {
    alert(names.slice(0, names.length - 1));
    names.pop();
    setNames(names.slice(0, names.length));
    alert(names);
  };
  
  const addit = () => {
    alert(names.slice(0,names.length-1));
    names.push(counry[Math.floor(Math.random() * 4)]);
    setNames(names.slice(0,names.length));
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
      <div>
        <button onClick={removeit}> Remove </button>
        <button onClick={addit}> Add country </button>
      </div>
    </div>
  );
};

export default Removit;

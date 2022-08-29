import React, { useState } from 'react';
import axios from "axios";

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
  //  alert(names.slice(0, names.length - 1));
    names.pop();
    setNames(names.slice(0, names.length));
  //  alert(names);
  };
  
  const addit = () => {
//    alert(names.slice(0,names.length-1));
    names.push(counry[Math.floor(Math.random() * 4)]);
    setNames(names.slice(0,names.length));
  //  alert(names);
  };
  const callaxios = ()=>{
    axios.get(`https://127.0.0.1/db.json`)
  }
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
        <button class="space" onClick={removeit}> Remove </button>
        <button class="space" onClick={addit}> Add country </button>
        <button class="space" onClick={callaxios}> Call Axios </button>

      </div>
    </div>
  );
};

export default Removit;

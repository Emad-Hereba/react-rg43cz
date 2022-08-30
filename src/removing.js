import React, { useState } from 'react';
import axios from 'axios';

const Removit = () => {
  let text = '';
  const [names, setNames] = useState([
    'Emad Hereba',
    'Emad Radwan',
    'Yahia Emad Hereba',
    'Ahmed Emad Hereba',
    'Youssif Emad Radwan',
  ]);
  const counry = [
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
    names.push(counry[Math.floor(Math.random() * 5)]);
    setNames(names.slice(0, names.length));
    //  alert(names);
  };
  const callaxios = () => {
 
    axios('https://json-server-lyvuhe--3000.local.webcontainer.io:8080/posts', {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Access-Control-Allow-Origin': 'https://react-umsnhy.stackblitz.io',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET',
        'Authorization': 'Bearer key',
      },
      withCredentials: true,
      credentials: 'same-origin',
    }).then(response => {
    })      
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
        <button class="space" onClick={removeit}>
          {' '}
          Remove{' '}
        </button>
        <button class="space" onClick={addit}>
          {' '}
          Add country{' '}
        </button>
        <button class="space" onClick={callaxios}>
          {' '}
          Call Axios{' '}
        </button>
      </div>
    </div>
  );
};

export default Removit;

import React from 'react';

const Query = () => {
  let text = '';
  const names = ['Emad Hereba ', 'Emad Radwan'];
  for (let i = 0; i < names.length; i++) {
    text += names[i] + "<br/>";
  }
  text = names;
  return <div>{text}</div>;
};

export default Query;

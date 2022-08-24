import React from 'react';

const Query = () => {
  let text = '';
  const names = [
    'Emad Hereba',
    'Emad Radwan',
    'Yahia Emad Hereba',
    'Ahmed Emad Hereba',
    'Youssif Emad Radwan',
  ];
  for (let i = 0; i < names.length; i++) text += names[i] + '<br/>';
  return (
    <div>
      {names.map((s) => (
        <React.Fragment>
          {s}
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export default Query;

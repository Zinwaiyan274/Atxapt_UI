import React from 'react';

function Question({ text,children }) {
  return (
    <div>
      <h2>{text}</h2>
    <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
    {children}
    </div>
    </div>
  );
}

export default Question;

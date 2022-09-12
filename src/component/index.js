import React, { useState } from 'react';
import Form from './Form';

const Index = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="text-center space-y-4">
      <h1 className="text-3xl font-thin ">Create Account</h1>
      <button type="button" class=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => setShow(!show)}>
        {show === true ? 'Cancel' : 'Create'}
      </button>
      {show && <Form />}
    </div>
  );
};

export default Index;

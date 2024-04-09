import React from 'react';
import { useNavigate } from 'react-router-dom';

const Notfound: React.FC = () => {
  const redirect = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg mb-4">The page you are looking for does not exist.</p>
      <button id="backToHomeButton" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => redirect('/home')}>
        Back to Homepage
      </button>
    </div>
  );
};

export default Notfound;

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const userDataString = localStorage.getItem('userData');
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session and user information from localStorage
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    // Redirect to the signin page after logout
    navigate('/signin');
  };

  let user = null;
  if (userDataString) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    user = JSON.parse(userDataString);
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-8">Dashboard</h1>
      <div className="bg-white rounded-lg shadow-md p-8">
        {user && (
          <div>
            <p className="text-lg font-semibold mb-4">Name: {user.user_name}</p>
            <p className="text-lg font-semibold mb-4">Email: {user.email}</p>
          </div>
        )}
      </div>
      <div>
        <a id="logout-link" href="#" onClick={handleLogout} className="text-blue-500 hover:underline">Logout</a>
      </div>
    </div>
  );
}

export default Dashboard;
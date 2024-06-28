import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Step 1: Import useNavigate
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Step 2: Use useNavigate hook




  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential.user);
      alert("Welcome you are signed in")
      // You can redirect the user to another page here, for example:
      // history.push('/dashboard');
      // Redirect to another page after successful sign-in
      navigate('/'); // Step 3: Redirect to the home page
    } catch (error) {
      setError(error.message);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-sm ">
        <h2 className=" text-white text-2xl font-semibold mb-6 text-center">Sign In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign In
          </button>
          <p className="mt-4 text-center text-sm text-white">
            Don't have an account?{' '}
            <Link to="/signup" className="bg-blue-700 hover:bg-blue-400">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignIn;

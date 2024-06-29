import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase/firebase.js'; // Adjust the path as per your file structure

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    const confirmed = window.confirm("Are you sure you want to sign out?");
    if (confirmed) {
      auth.signOut().then(() => {
        console.log('User signed out');
      }).catch((error) => {
        console.error('Sign Out Error', error);
      });
    }
  };
  return (
    <div className="border-b-2 border-white">
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="logo text-white text-xl font-bold cursor-pointer">MockAi</div>
          <ul className="flex space-x-4 text-white font-bold">
            <li>
              <Link to="/" className="hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-300">About Us</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-300">Contact Us</Link>
            </li>
            {user && ( // Render Chat link only if user is authenticated
              <li>
                <Link to="/chat" className="hover:text-gray-300">Chat</Link>
              </li>
            )}
          </ul>
          {user ? (
            <div className="flex items-center">
              <div className="text-white mr-4">Hi {user.email}</div>
              <button onClick={handleSignOut} className="text-white font-bold py-1 px-3 rounded bg-red-600 hover:bg-red-700">Sign Out</button>
            </div>
          ) : (
            <div className="sign-in">
              <Link to="/signin" className="text-white font-bold py-1 px-3 rounded bg-indigo-600 hover:bg-indigo-700">Sign In</Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

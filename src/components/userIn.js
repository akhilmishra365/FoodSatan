
import { Link } from "react-router-dom";

import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import Signout from "./Logout.js";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import { app } from "../firebase.js";


const auth = getAuth(app);



const userIn = () => {

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [user, setUser] = useState({});
  
  
  const login = async () => {
      try {
      const user = await signInWithEmailAndPassword(auth,  loginEmail, loginPassword) 
      const email = user.email;
  
    
      }
      catch (error) {
          console.log(error.message);
      }
    
  };

    return (
       <>
       <div className="login-container flex items-center justify-center h-screen bg-gray-100">
    <div className="login-card bg-white rounded-lg shadow-md px-8 py-10 w-full md:w-1/2">
      <h2 className="text-2xl font-bold text-center mb-8">Login</h2>
      <form className="flex flex-col space-y-4">
        <div className="flex items-center">
          <label for="email" className="w-1/3 text-right mr-2">Email:</label>
          <input type="email" id="email" name="email" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        </div>
        <div className="flex items-center">
          <label for="password" className="w-1/3 text-right mr-2">Password:</label>
          <input type="password" id="password" name="password" className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"/>
        </div>
        <div className="flex items-center justify-between">
          <a href="#" className="text-sm text-blue-500 hover:underline">Forgot Password?</a>
          <Link to="/" className="text-sm text-blue-500 hover:underline">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={login}>Login</button>
          </Link>
          
        </div>
      </form>
      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">Don't have an account? </span>
        <Link to="/signup" className="text-sm text-blue-500 hover:underline">Sign Up</Link>
      </div>
      
    </div>
  </div>
       </>
    
   
    );
};

export default userIn;
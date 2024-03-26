import React, { useState } from 'react';
import { initializeApp } from "firebase/app";
import Signout from "./Logout.js";
import { getAuth, createUserWithEmailAndPassword , onAuthStateChanged} from "firebase/auth";
import { app } from "../firebase";
import  {Link} from "react-router-dom";
 

const auth = getAuth(app);

const SignUp = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [user, setUser] = useState({});
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  
    const register = async () => {
        try {
        const user = await createUserWithEmailAndPassword(auth, email, password) 
      
        }
        catch (error) {
            console.log(error.message);
        }

    };




  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }




    // Form validation successful (add your form submission logic here)
    console.log('Form submitted successfully!');
    console.log(`Email: ${email}, Password: ${password}`);

    // Reset form (optional)
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setError('');
  };

  const signUp = () => {createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });}

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>
      <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
        <div className="flex items-center">
          <label for="email" className="w-1/3 text-right mr-2">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value) 
            }
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label for="password" className="w-1/3 text-right mr-2">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>
        <div className="flex items-center">
          <label for="confirmPassword" className="w-1/3 text-right mr-2">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          {error && <span id="confirm-error" className="text-xs text-red-500">{error}</span>}
        </div>
        <Link to = "/"> 
        <button type="submit" className= "flex item-center bg-blue-500 text-white px-4 py-2 rounded-md  hover:bg-blue-700 disabled:opacity-50" onClick={register}>
          Sign Up 
        </button> 
        </Link>
     


            <br/>
           <p>Already have an account ?</p> 
   <Link to = "/Login">
   <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50" >
        Login
        </button>
   </Link>
     


      </form>
    </div>
  );
};

export default SignUp;
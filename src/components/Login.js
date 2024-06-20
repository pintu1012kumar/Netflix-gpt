import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
const [isSignInForm,setIsSignInForm] = useState(true);

const toggleSignInForm = () => {
  setIsSignInForm(!isSignInForm);
};
  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/51c1d7f7-3179-4a55-93d9-704722898999/be90e543-c951-40d0-9ef5-e067f3e33d16/IN-en-20240610-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      alt=''
      />
      </div>
     
       <form class="w-full max-w-sm absolute py-12 my-36 mx-auto  right-0 left-0  bg-black rounded-lg shadow-lg text-white px-8 bg-opacity-80">
        <h1 class="font-bold text-3xl py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

        {!isSignInForm && (
            <div class="mb-4">
               <label class="block text-sm font-bold mb-2" for="email">Full name:</label>
               <input type="text" id="text" placeholder="Enter your name" class="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
           </div>
        )}
        <div class="mb-4">
            <label class="block text-sm font-bold mb-2" for="email">Email Address:</label>
            <input type="email" id="email" placeholder="Email Address" class="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
        </div>
        
        <div class="mb-6">
            <label class="block text-sm font-bold mb-2" for="password">Password:</label>
            <input type="password" id="password" placeholder="Password" class="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
        </div>
        <button type="submit" class="p-4 my-4 bg-red-700 w-full rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
    </form>
    </div>
    
  )
}

export default Login

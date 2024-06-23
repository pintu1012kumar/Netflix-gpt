import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';


const Login = () => {
const [isSignInForm,setIsSignInForm] = useState(true);
const [errorMessage,setErrorMessage] = useState(null); 

const email = useRef(null);
const password = useRef(null);


const handleButtonClick = () => {
  // validate the form data
  // console.log(email.current.value);
  // console.log(password.current.value);

  const massage =  checkValidData(email.current.value,password.current.value);
//  console.log(massage);
setErrorMessage(massage);
if(massage) return;
if(!isSignInForm) {
    // Sign Up Logic

}
else{
   // Sign In Logic
}




};

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
     
       <form  onSubmit={(e)=>e.preventDefault()}
        className="w-full max-w-sm absolute py-12 my-36 mx-auto  right-0 left-0  bg-black rounded-lg shadow-lg text-white px-8 bg-opacity-80"
        >
        <h1 className="font-bold text-3xl py-4 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

        {!isSignInForm && (
            <div className="mb-4">
               <label className="block text-sm font-bold mb-2" htmlFor="email">Full name:</label>
               <input type="text" id="text" placeholder="Enter your name" className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
           </div>
        )}
        <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">Email Address:</label>
            <input ref={email} type="email" id="email" placeholder="Email Address" className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
        </div>
        
        <div className="mb-6">
            <label className="block text-sm font-bold mb-2" htmlFor="password">Password:</label>
            <input ref={password} type="password" id="password" placeholder="Password" className="p-2 my-2 w-full bg-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"/>
        </div>
        <p className="text-red-600 font-bold text-lg py-2">{errorMessage}</p>
        <button type="submit" className="p-4 my-4 bg-red-700 w-full rounded-md hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600" onClick={handleButtonClick}>
          {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registered? Sign In Now"}</p>
    </form>
    </div>
    
  )
}

export default Login

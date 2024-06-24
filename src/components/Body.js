import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";


const Body = () => {
const dispatch = useDispatch();
// const navigate = useNavigate();

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path: "/browse",
    element: <Browse/>,
  }
])

useEffect( ()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {uid, email, displayName,photoURL} = user;
      dispatch(
        addUser({
          uid: uid, 
          email: email, 
          displayName:displayName, 
          photoURL:photoURL
        })
      );
      // navigate("/browse")
    } else {
      dispatch(removeUser());
      // navigate("/")
    }
  });
},[])

  return (
    <div>
      {/* <Login />
      <Browse/> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;

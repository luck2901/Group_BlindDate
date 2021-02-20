import React,{useEffect, useState} from "react";
import AppRouter from "./Router";
import { authService } from './../Fbase';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  const [init, setInit] = useState(false);
  const [userObject, setUserObject] = useState(null);
  useEffect(() =>{
    authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
        setUserObject(user);
      }else{
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);

  return (
    <>
      {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..." }
    </>
  )
}

export default App;

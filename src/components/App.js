import React,{useState} from "react";
import Router from "./Router";
import {authService} from "../Fbase";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);

  return <Router isLoggedIn={isLoggedIn}/>
}

export default App;

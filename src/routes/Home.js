import React,{useState} from "react";
import {dbService} from "../Fbase";
import Information from "./Information";

const Home = ({userObject}) =>{
    return(
        <Information userObject={userObject}/>
    );
}

export default Home;
import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faGoogle, faGithub} from "@fortawesome/free-brands-svg-icons";
import "firebase/auth";
import { authService, firebaseInstance} from '../Fbase';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Auth = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const history = useHistory();

    const onChange = (e) =>{
        const {target:{value, name}} = e;
        if(name === "email") setEmail(value);
        else if(name ==="password") setPassword(value);
    }
    const onSubmit = async(e) =>{
        e.preventDefault();
        try{
            const data = await authService.signInWithEmailAndPassword(email,password)
        }catch(error){
            setError(error.message);
        }
    }
    const onClick = async() =>{
            history.push("/Register");
    }
    const anotherLog = async(e) =>{
        const {target:{name}} = e;
        let provider;
        if(name ==="google"){
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        }
        await authService.signInWithPopup(provider);       
    }
    return(
        <div className="authContainer">
        <FontAwesomeIcon
        icon={faHeart} 
        color="red"
        size="3x"
        style={{marginBottom:30}}
        />
        <form onSubmit = {onSubmit} className="container">
            <input name = "email" type="text" onChange = {onChange} value={email} placeholder="Email" required/>
            <input name = "password" type ="password" onChange={onChange} value={password} placeholder="Password" required/>
            <input className="formbtn" type="submit" value="LOG IN"/>
            <input className="formbtn" name = "register" type="submit" onClick={onClick} value="Register"/>
            <span>{error}</span>
            <div >
                <button className="google" onClick={anotherLog} name="google">LOGIN with GOOGLE <FontAwesomeIcon icon={faGoogle}/></button>
                <button className="github" onClick={anotherLog} name="github">LOGIN with GITHUB <FontAwesomeIcon icon={faGithub}/></button>
            </div>
        </form>
        </div>
    );
}

export default Auth;
import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import "firebase/auth";
import { authService, firebaseInstance} from '../Fbase';

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
    const onClick = async(e) =>{
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
        <form onSubmit = {onSubmit}>
            <input name = "email" type="text" onChange = {onChange} value={email} placeholder="Email" required/>
            <input name = "password" type ="password" onChange={onChange} value={password} placeholder="Password" required/>
            <input type="submit" value="LOG IN"/>
            <input name = "register" type="submit" onClick={onClick} value="Register"/>
            <span>{error}</span>
            <div>
                <button onClick={anotherLog} name="google">LOGIN with GOOGLE</button>
            </div>
        </form>
    );
}

export default Auth;
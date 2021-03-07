import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import {authService} from "../Fbase"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUserEdit } from "@fortawesome/free-solid-svg-icons";

const Register = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const[error,setError] = useState("");
    const history = useHistory();

    const onChange=(e) =>{
        const {target:{value,name}}=e;
        if(name==="email") setEmail(value);
        else if(name==="password") setPassword(value);
    }
    const onSubmit = async(e) =>{
        e.preventDefault();
        try{
            await authService.createUserWithEmailAndPassword(email,password);
            history.push("/");
        }catch(error){
            setError(error.message)
        };

    }
    const onBack =() =>{
        history.push("/");
    } 
    return (
        <div className = "registerContainer">
            <FontAwesomeIcon 
            icon = {faUserEdit}
            color="orange"
            size="3x"
            style={{marginBottom:30}}
            />
                <form onSubmit={onSubmit} className="container">
                    <input type="email" placeholder="Email" name="email" onChange = {onChange} required/> <br/>
                    <input type="password" placeholder="Password" name="password" onChange = {onChange} required/> <br/>
                    <input className = "regbtn" type="submit" name="register" value = "Submit"/>
                    <input className = "regbtn" type="button" name="back" value = "back" onClick={onBack}/><br/>
                    <span>{error}</span>
                </form>
        </div>
    );
}

export default Register;
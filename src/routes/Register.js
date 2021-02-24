import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import {authService} from "../Fbase"

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
        <div>
            <form onSubmit={onSubmit}>
                <input type="email" placeholder="Email" name="email" onChange = {onChange} required/> <br/>
                <input type="password" placeholder="Password" name="password" onChange = {onChange} required/> <br/>
                <input type="submit" name="register" value = "Submit"/>
            </form>
            <div>
                <button name="back" value = "back" onClick={onBack}>Back</button> <br/>
                <span>{error}</span>
            </div>
        </div>
    );
}

export default Register;
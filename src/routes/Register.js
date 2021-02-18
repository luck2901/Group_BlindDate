import React, { useState } from "react"

const Register = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [school, setSchool] = useState("");
    onChange=(e) =>{
        const {target:{value,name}}=e;
        if(name===email) setEmail(value);
        else if(name===password) setPassword(value);
        else if(name===school) setSchool(value);
    }
    onSubmit = (e) =>{
        e.preventDefault();
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="email" placeholder="Email" name="email" onChange = {onChange} required/>
            <input type="password" placeholder="Password" name="password" onChange = {onChange} required/>
            <input type="text" placeholder= "School" name="school" onChange = {onChange} required/>
        </form>
    );
}

export default Register;
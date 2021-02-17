import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import "firebase/auth";

const Auth = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onChange = (e) =>{
        const {target:{value, name}} = e;
        if(name === "email") setEmail(value);
        else if(name ==="password") setPassword(value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    const onClick = () =>{
        history.push("/Register");
    }
    return(
        <form onSubmit = {onSubmit}>
            <input name = "email" type="text" onChange = {onChange} value={email} placeholder="Email"/>
            <input name = "password" type ="password" onChange={onChange} value={password} placeholder="Password"/>
            <input type="submit" value="LOG IN"/>
            <input type="submit" onClick={onClick} value="Register"/>
        </form>
    );
}

export default Auth;
import React, {useState} from "react";
import "firebase/auth";

const Auth = () => {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onChange = (e) =>{
        const {target:{value, name}} = e;
        if(name === "email") setEmail(value);
        else if(name ==="password") setPassword(value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    return(
        <form onSubmit = {onSubmit}>
            <input name = "email" type="text" onChange = {onChange} value={email} placeholder="Email"/>
            <input name = "password" type ="password" onChange={onChange} value={password} placeholder="Password"/>
            <input type="submit" value="LOG IN"/>
        </form>
    );
}

export default Auth;
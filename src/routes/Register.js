import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import {authService} from "../Fbase"

const Register = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [school, setSchool] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("man");
    const[error,setError] = useState("");
    const history = useHistory();

    const onChange=(e) =>{
        const {target:{value,name}}=e;
        if(name==="email") setEmail(value);
        else if(name==="password") setPassword(value);
        else if(name==="school") setSchool(value);
        else if(name==="age") setAge(value);
        else if(name==="name") setName(value);
    }
    const onSubmit = async(e) =>{
        e.preventDefault();
        try{
            const data = await authService.createUserWithEmailAndPassword(email,password);
        }catch(error){
            setError(error.message)
        };

    }
    const onCheck = (e) =>{
        const {target:{value, checked}} = e;
        if(checked){
            if(value==="man") setGender(value);
            else if(value==="woman") setGender(value);    
        }
    }
    const onBack =() =>{
        history.push("/");
    } 
    return (
        <form onSubmit={onSubmit}>
            <input type="email" placeholder="Email" name="email" onChange = {onChange} required/> <br/>
            <input type="password" placeholder="Password" name="password" onChange = {onChange} required/> <br/>
            <input type="text" placeholder= "School" name="school" onChange = {onChange} /> <br/>
            <input type="text" placeholder="Name" name="name" onChange={onChange}  /> <br/>
            <input type="text" placeholder="Age" name="age" onChange={onChange}  /> <br/>
            <input type="radio" name="gender" value="man"  onClick={onCheck} defaultChecked/>Man
            <input type="radio" name="gender" value="woman" onClick={onCheck} />Woman <br/>
            <input type="submit" name="register" value = "Submit"/>
            <button name="back" value = "back" onClick={onBack}>Back</button> <br/>
            <span>{error}</span>
        </form>
    );
}

export default Register;
import React, { useState } from "react"

const Register = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [school, setSchool] = useState("");
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("man");

    const onChange=(e) =>{
        const {target:{value,name}}=e;
        if(name==="email") setEmail(value);
        else if(name==="password") setPassword(value);
        else if(name==="school") setSchool(value);
        else if(name==="age") setAge(value);
        else if(name==="name") setName(value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
    }
    const onCheck = (e) =>{
        const {target:{value, checked}} = e;
        if(checked){
            if(value==="man") setGender(value);
            else if(value==="woman") setGender(value);    
        }
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="email" placeholder="Email" name="email" onChange = {onChange} required/>
            <input type="password" placeholder="Password" name="password" onChange = {onChange} required/>
            <input type="text" placeholder= "School" name="school" onChange = {onChange} required/>
            <input type="text" placeholder="Name" name="name" onChange={onChange} required />
            <input type="text" placeholder="Age" name="age" onChange={onChange} required />
            <input type="radio" name="gender" value="man"  onClick={onCheck} defaultChecked/>Man
            <input type="radio" name="gender" value="woman" onClick={onCheck} />Woman
        </form>
    );
}

export default Register;
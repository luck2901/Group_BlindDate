import React,{useState} from "react";
import { authService, dbService } from './../Fbase';

const Profile = ({userObject}) =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("남");
    const onClick=()=>{
        authService.signOut();
    }
    const onRadioClick = (e) =>{
        const {target:{value}} = e;
        if(value==="남") setSex("남");
        else if(value==="여") setSex("여");
    }
    const onSubmit = async(e) =>{
        e.preventDefault();
        await dbService.doc(`Information/${userObject.uid}`).update({
            name,
            age,
            sex
        });
    }
    const onChange = (e) =>{
        const {target:{value,name}} = e;
        if(name==="name") setName(value);
        else if(name==="age") setAge(value);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" value={name} type ="text" onChange = {onChange} required placeholder="이름이 뭐에요?" /> <br/>
                <input name="age" value={age} type="text" onChange = {onChange} required placeholder="나이는요??" /><br/>
                <label><input name="sex" value="남" type="radio" onClick={onRadioClick} defaultChecked/>남</label>
                <label><input name="sex" value="여" type="radio" onClick={onRadioClick}/>여</label> <br/>
            </form>
            <input type="submit" value="Edit"/>
            <button onClick={onClick}>LOG OUT</button>
        </div>
    );
}

export default Profile;
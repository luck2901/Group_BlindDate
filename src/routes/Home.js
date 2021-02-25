import React,{useState} from "react";
import {dbService} from "../Fbase";

const Home = ({userObject}) =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("남");

    const onRadioClick = (e) =>{
        const {target:{value}} = e;
        if(value==="남") setSex("남");
        else if(value==="여") setSex("여");
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        dbService.doc(`Information/${userObject.uid}`).set({
            name,
            age,
            sex
        })
    }
    const onChange = (e) =>{
        const {target:{value,name}} = e;
        if(name==="name") setName(value);
        else if(name==="age") setAge(value);
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name="name" value={name} type ="text" onChange = {onChange} placeholder="이름이 뭐에요?" /> <br/>
                <input name="age" value={age} type="text" onChange = {onChange} placeholder="나이는요??" /><br/>
                <label><input name="sex" value="남" type="radio" onClick={onRadioClick} defaultChecked/>남</label>
                <label><input name="sex" value="여" type="radio" onClick={onRadioClick}/>여</label> <br/>
                <input type="submit" value="등록" />
            </form>
        </div>
    );
}

export default Home;
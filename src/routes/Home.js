import React,{useState} from "react";

const Home = () =>{
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [sex, setSex] = useState("남");

    const onRadioClick = (e) =>{
        const {target:{value}} = e;
        if(value==="남") setSex("남");
        else if(value==="여") setSex("여");
    }
    return(
        <div>
            <form>
                <input name="name" value={name} type ="text" placeholder="이름이 뭐에요?" /> <br/>
                <input name="age" value={age} type="text" placeholder="나이는요??" /><br/>
                <label><input name="sex" value="남" type="radio" onClick={onRadioClick} defaultChecked/>남</label>
                <label><input name="sex" value="여" type="radio" onClick={onRadioClick}/>여</label> <br/>
                <span>{sex}</span>
            </form>
        </div>
    );
}

export default Home;
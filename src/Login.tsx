import { useState } from "react";
import Input from "./components/Input";
import UsernameIcon from "./components/UsernameIcon";
import PasswordIcon from "./components/PasswordIcon";
import Button from "./components/Button";
import { Link, useNavigate } from 'react-router-dom'
import {url} from './components/config'
import { userDataType } from "./components/interfaceConfig";



export default function Login() {

    let [username, setUsername] = useState("")
    let [password, setPassword] = useState("")
    let [showPassword, setShowPassword] = useState("password")
    const navigate = useNavigate();


    const loginData = async (data: userDataType)=>{
        let response = await fetch(url+"signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if(!response.ok){ 
            if(response.status === 401){
                alert("Invalid Credentials");
                return;
            }
            return new Error(`${response.status}`)
        };
        let res = await response.json();
        localStorage.setItem("jsontoken", `${res.jsontoken}`);
        navigate("/home");
    }

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        await loginData({
            username,
            password,
        })
        // console.log(res);
        setUsername("");
        setPassword("");
    }

    function handleUsername(e: React.ChangeEvent<HTMLInputElement>) {
        setUsername(e.target.value);
    }
    function handlePassword(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }
    function handleShowPassword() {
        if (showPassword == 'text')
            setShowPassword("password");
        else
            setShowPassword("text");
    }
    return (
        
            <form onSubmit={handleSubmit} className="border-2 border-purple-800 bg-white flex flex-col shadow-xl h-100 w-100 justify-center items-center rounded-xl gap-5">
                <Input onChange={handleUsername} name={"username"} value={username} placeholder="Username" type="text" Icon={<UsernameIcon size="lg" color="grey" />} position="start" />
                <Input onChange={handlePassword} name={"password"} value={password} placeholder="Password" type={showPassword} Icon={<PasswordIcon size="lg" color="grey" />} position="start" />
                <div className="flex gap-2 m-2">
                    <input onChange={handleShowPassword} id="show" type="checkbox" />
                    <label htmlFor="show">Show Password</label>
                </div>
                <Button onClick={()=>{}} variant="Secondary" type={"submit"} size="lg" text="Log In" />
                <p>Not registered yet? <Link to="/signup">Sign Up</Link></p>
            </form>

    )
}
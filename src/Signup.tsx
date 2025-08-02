import { useState } from "react";
import Input from "./components/Input";
import UsernameIcon from "./components/UsernameIcon";
import PasswordIcon from "./components/PasswordIcon";
import Button from "./components/Button";
import { url } from './components/config'
import { userDataType } from "./components/interfaceConfig";
import { useNavigate } from "react-router-dom";

export default function Signup() {

    const [username, setUsername] = useState<string>(""); 
    const [password, setPassword] = useState<string>("");
    
    const [showPassword, setShowPassword] = useState("password")
    const navigate = useNavigate();


    // const loginData = async (data: userDataType) => {
    //     let response = await fetch(url + "signin", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //         },
    //         body: JSON.stringify(data),
    //     });
    //     if (!response.ok) return new Error(`${response.status}`)
    //     let res = await response.json();
    //     localStorage.setItem("jsontoken", `${res.jsontoken}`);
    //     setUsername("");
    //     setPassword("");
    // }

    const signupData = async () => {
        let response = await fetch(url + "signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({"username" : username, "password" : password}),
        });
        if (!response.ok) return new Error(`${response.status}`)
        else {
            let res = await response.json();
            navigate("/home");
            alert(res.message);
        }
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
            <form onSubmit={(e : React.FormEvent<HTMLFormElement>)=>{
                e.preventDefault();
                signupData();
            }} className="bg-white flex flex-col shadow-xl h-100 w-100 justify-center items-center rounded-xl gap-5">
                <Input onChange={handleUsername} name={"username"} value={username} placeholder="Username" type="text" Icon={<UsernameIcon size="lg" color="grey" />} position="start" />
                <div className="flex flex-col">
                <Input onChange={handlePassword} name={"password"} value={password} placeholder="Password" type={showPassword} Icon={<PasswordIcon size="lg" color="grey" />} position="start" />
                <div className="flex gap-2 ml-2">

                    <input onChange={handleShowPassword} id="show" type="checkbox" />
                    <label htmlFor="show">Show Password</label>
                </div>
                </div>
                <div className="flex gap-2 pt-8">
                    <Button onClick={()=>{}} type="submit" variant="Secondary" size="lg" text="Sign Up" />
                </div>
            </form>
    )
}
import { useState } from "react";
import "../Header/Header.css";
import "./Login.css";



function Login() {
 

    const [userLogin, setLogin] = useState({
        userName: "",
        password: ""
    });
    const { userName, password } = userLogin;

    function handleChange(event) {

        event.preventDefault();

        const { name, value } = event.target;
        setLogin({ ...userLogin, [name]: value })
        console.log(userLogin);



    }
    function loggedin(e) {
        e.preventDefault();
        let lgs = document.querySelector(".loginsec");
        let logout=document.querySelector(".loggedOut");

        if (userName == "vivekmondal9@gmail.com" && password == "21111995") {
            console.log("Login Successful")
            let nm = userLogin.userName;
            lgs.innerText = nm;
            logout.style.display="block";

            let r = document.querySelector(".logindiv");
            r.style.display = "none";
            let w = document.querySelector(".row");
            w.style.opacity = "1";
            alert("Welcome: "+nm+" .")
      

        }
        else {
            alert("Invalid Username or Password!!!!");
            document.getElementById("password").value="";
            document.getElementById("username").value="";

        }


    }

    function crossed() {

        let rw = document.querySelector(".row");

        rw.style.opacity = "1";
        let log = document.querySelector(".logindiv");
    
        log.style.display = "none";
        
        
    }

    return (
        <div className="login-page">
            <span className="cross" onClick={crossed} >&times;</span>
            <form className="form-sec">
                <label htmlFor="username" className="label">User Name
                    <input id="username" type="text" name="userName" value={userName} placeholder="Enter Your Username." onChange={handleChange} className="inputclass"></input>
                </label>
                <label htmlFor="password" className="label">Password
                    <input id="password" type="text" name="password" value={password} placeholder="Enter Your Password." onChange={handleChange} className="inputclass"></input>
                </label>
                <button id="loginbtn" onClick={loggedin}>Login</button>
            </form>


        </div>
    )
}

export default Login;
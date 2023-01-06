import React, { useEffect, useState } from "react";

import Login from "../Login/Login";
import Register from "../Login/Register";

import "./Header.css";



function Header(props) {
 

    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
        let itms = localStorage.getItem("cartItems");

        if (itms) {
            itms = JSON.parse(itms);
            setCartCount(itms.length);
        }

    }, [props.count])
  

    function logpageopen() {
        let llg = document.querySelector(".loginsec");
        if (llg.innerHTML === "Login") {

            let rw = document.querySelector(".row");
            // let ctrw = document.querySelector(".cart-row");
            let log = document.querySelector(".logindiv");

            
            log.style.display = "flex";

            rw.style.opacity = "0.3";

            // let cartrow=document.querySelector(".cart-row");
            // cartrow.style.opacity="0.3";
        }
    }

    function loggedout(e) {
        e.preventDefault();
        let logout = document.querySelector(".loggedOut");

        let llg = document.querySelector(".loginsec");
        llg.innerHTML = "Login";
        logout.style.display = "none";
        
        let rrg=document.querySelector(".registersec");
        rrg.style.display="block";




    }
    function register() {
        let llg = document.querySelector(".registersec");
        if (llg.innerHTML === "Register") {

            let rw = document.querySelector(".row");
            // let ctrw = document.querySelector(".cart-row");
            let regdiv = document.querySelector(".register-div");

            
            regdiv.style.display = "flex";

            rw.style.opacity = "0.3";

        }

    }

    return (
        <nav className="navbar navbar-expand-lg bg-dark header">
            <div className="container-fluid">
                <div className="leftHeader">
                    <a className="navbar-brand header-name" href="/">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                        </svg>E-Cartz
                    </a>
                </div>
                <div className="rightheader">
                    <div className="cartPart">

                        <a href="/cart" className="cartButton">Cart</a>
                        <span className="badge text-bg-primary">{cartCount}</span>

                    </div>

                    <a className="loginsec" href="#" onClick={logpageopen}>Login</a>
                    <button className="loggedOut" onClick={loggedout}>Log Out</button>
                    <a className="registersec" href="#" onClick={register}>Register</a>
                </div>

            </div>
            <div className="logindiv" >
                <Login></Login>
            </div>
            <div className="register-div">
                <Register></Register>
            </div>
        </nav>

    )
}



export default Header;
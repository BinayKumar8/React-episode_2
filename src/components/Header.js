import {LOGO_URL} from "../commonUtil/constant";
import { useState } from "react";

const Header = () => {

    const [reactLogin,setReactLogin] = useState("Login");

    return (
        <div className="header">
            <div className="log-container">
                <img className="app-logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                    <ul>
                        <li className="list">Home</li>
                        <li className="list">Contact Us</li>
                        <li className="list">About Us</li>
                        <li className="list">Cart</li>
                        <button className="login-btn" onClick={() => {
                            reactLogin === "Login" ? setReactLogin("Logout") : setReactLogin("Login");
                        }}>{reactLogin}</button>
                    </ul>
            </div>
        </div>
    )
}

export default Header;
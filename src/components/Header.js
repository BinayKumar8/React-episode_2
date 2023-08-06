import {LOGO_URL} from "../commonUtil/constant";

const Header = () => {
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
                    </ul>
            </div>
        </div>
    )
}

export default Header;
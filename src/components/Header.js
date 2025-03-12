import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
    <Link to="/">
    <img
      className="logo"
      alt="logo"
      src={LOGO_URL}
    />
    </Link>
  
);

const Header = () => {
    const [btnNameText, setBtnNameText] = useState("Login");    
    const onlineStatus = useOnlineStatus();
    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li>online Status: {onlineStatus ? "yes" : "no"} </li>
                <li><Link to="/" >Home </Link> </li>
                <li><Link to="/about" > About </Link> </li>
                <li><Link to="/contact" > Contact </Link> </li>
                <li><Link to="/grocery" > Grocery </Link> </li>
                <button className="login"
                    onClick={() => {
                        btnNameText === "Login" ?  setBtnNameText("Logout") : setBtnNameText("Login");
                    }}
                >
                    {btnNameText}
                </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;
import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";

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

    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li><Link to="/" >Home </Link> </li>
                <li><Link to="/about" > About </Link> </li>
                <li><Link to="/contact" > Contact </Link> </li>
                <li><Link to="/" > Cart </Link> </li>
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
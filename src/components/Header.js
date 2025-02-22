import { useState } from "react";
import { LOGO_URL } from "../utils/constant";

const Title = () => (
    <a href="#">
    <img
      className="logo"
      alt="logo"
      src={LOGO_URL}
    />
  </a>
);

const Header = () => {
    const [btnNameText, setBtnNameText] = useState("Login");    

    return(
        <div className="header">
            <Title />
            <div className="nav-items">
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
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
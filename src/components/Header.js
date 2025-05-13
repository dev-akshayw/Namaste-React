import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Title = () => (
    <Link to="/">
    <img
      className="logo flex w-[150px]"
      alt="logo"
      src={LOGO_URL}
    />
    </Link>
  
);

const Header = () => {
    const [btnNameText, setBtnNameText] = useState("Login");    
    const onlineStatus = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);

    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    return(
        <div className="header flex py-8 px-4 items-center justify-between">
            <Title />
            <div className="nav-items">
                <ul className="flex gap-5">
                <li>online Status: {onlineStatus ? "yes" : "no"} </li>
                <li><Link to="/" >Home </Link> </li>
                <li><Link to="/about" > About </Link> </li>
                <li><Link to="/contact" > Contact </Link> </li>
                <li><Link to="/grocery" > Grocery </Link> </li>
                <li><Link to="/cart" > Cart ({cartItems.length} items) </Link> </li>
                <button className="login"
                    onClick={() => {
                        btnNameText === "Login" ?  setBtnNameText("Logout") : setBtnNameText("Login");
                    }}
                >
                    {btnNameText}
                </button>
                <li className="font-bold"> {loggedInUser}  </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
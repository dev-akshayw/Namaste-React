import React, { Suspense, lazy, useEffect, useState, useContext } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { Body } from "./components/Body";
import About from "./components/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext"; 
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
// import Grocery from "./components/Grocert";

const Footer = () => {
    return <h4>Footer</h4>;
  };

const Grocery = lazy( () => import("./components/Grocert"));

const AppLayout = () => {
    const [userName, setUserName] =  useState();

    // Authentication
    useEffect(() => {
        // API CAll & get data
        const data = {
            name: "Akshay Waychal",
        };
        setUserName(data.name);
    }, []);

    return (
            <Provider store={appStore}>
            <UserContext.Provider value={ {loggedInUser : userName, setUserName} }>
                <div className="app">
                    <Header />
                    <Outlet />
                    <Footer />
                </div> 
            </UserContext.Provider>
            </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />,
            },
            {
                path: "/grocery",
                element: <Suspense fallback={ <h2>Loading...</h2> } >  <Grocery /> </Suspense>,
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ],
        errorElement: <Error />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
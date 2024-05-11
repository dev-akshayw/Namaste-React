import React from "react";
import ReactDOM from "react-dom/client";

const Title = () =>  <h2>Hello AKshay</h2>; 

const Name = () => {
   return (
    <div>
        <h2>Hello Akshay</h2> 
        <h5>ddd</h5>
    </div>
   )

}
    

const Head = () => (
    <div id="cont">
        <Title /> 
        <Name />
        <h2>Hello Aakash</h2>
    </div>
);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Head />)


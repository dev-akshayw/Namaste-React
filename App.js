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

const title2 = (
    <div>
        <h1>This is React Js Course</h1>
        <Head />
    </div>
    
);



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(title2);


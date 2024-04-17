import React from "react";
import ReactDOM from "react-dom/client";

    const head =  React.createElement("h1", {
        id: "hello",
    } , "Namaste React"); 

    const head2 = React.createElement("h2", {
        className: "h2",
    }, "heading h2"); 

    const container = React.createElement("div", {}, [head, head2]);

    const root = ReactDOM.createRoot(document.getElementById("root")); 

    root.render(container);
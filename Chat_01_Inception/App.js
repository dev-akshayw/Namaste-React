
const heading = React.createElement("h1", {id:"title",}, "Namaste Everyone");

const heading2 = React.createElement("h2",{}, "heading2");

const container = React.createElement("div", {id:"container"}, [heading,heading2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
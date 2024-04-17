// const head = document.createElement("h1"); 
// head.innerHTML = "Namaste Everyone"; 
// const root = document.getElementById("root");
// root.appendChild(head);l
const head = React.createElement("h1", {
    id: "hello"
}, "Namaste React");
const head2 = React.createElement("h2", {
    class: "h2"
}, "heading h2");
const container = React.createElement("div", {}, [
    head,
    head2
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=index.6bd02f5a.js.map

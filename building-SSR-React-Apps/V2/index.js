const rootElement = document.getElementById("root");

// const h1 = document.createElement("h1");

// h1.className = "orange";
// h1.innerText = "Hello from JavaScript!";

const h1Element = React.createElement("h1", { className: "orange" }, "Hello from JavaScript and React!");
// rootElement.appendChild(h1);

ReactDOM.render(h1Element, rootElement);

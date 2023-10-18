const rootElement = document.getElementById("root");


const hello = (props) => {
    return  React.createElement("h1", { className: "orange" }, "Hello from JavaScript and React!" + props.time);

};

ReactDOM.render(React.createElement(hello, {time: new Date().toISOString() }, null), rootElement);

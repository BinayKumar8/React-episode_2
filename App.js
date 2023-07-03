import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement("div", {
    id: "parent",
    name: "Binay"
}, 
 [React.createElement("div", { id: "child" }, 
 [React.createElement("h1", {}, "This is namaste react ep-2 ❤"),React.createElement("h2", {}, "I am a h2 tag")]),
 React.createElement("div", { id: "child2" }, 
 [React.createElement("h1", {}, "I am a h1 tag"),React.createElement("h2", {}, "I am a h2 tag")])]
 );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
import React from "react";
import ReactDOM from "react-dom";

const jsxHeading = <h1 className="head">Namaste React using JSX 🚀</h1>; // This is JSX.
const Jsx = () => (
    <h1 className="head">Namaste React using JSX as functional component 🚀</h1>
)


const Title = () => (
    <h1 className="title">
        <Jsx/>
        This is Title component
        {jsxHeading}
    </h1>
)

const number = 1000;
const HeadingComponent2 = () => ( // 2
    <div id="main">
        <Title/>
        <h1 className="heading2">Namaste React using Functional component {number}</h1>
    </div>
);

//React Fuctional Component
// const HeadingComponent = () => {  // 1
//     return <h1 className="heading">Heading component</h1>;
// }
//  1 and 2 both are same valid functional component
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);
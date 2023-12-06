import '../assets/stylesheets/application.scss';
import { createRoot } from "react-dom/client";
import React from 'react';
import App from "./components/App"



const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<App />);


// console.log("hi!");

// const Hello = ({ name, job }) => {
//   // const name = props.name;
//   // const job = props.job;
//   // SAME AS 👇
//   // const { name, job } = props;

//   // console.log(<pro></pro>ps);
//   return (
//     <h1>Hi, I'm {name} working as a {job}</h1>
//   )
// }

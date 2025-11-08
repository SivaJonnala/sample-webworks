import { useState, useReducer, useEffect } from "react";
import React from "react";
import "./App.css";
import chef from "./images/image-1.jpg";
function Header({ name, year }) {
  return (
    <header>
      <h1>{name}'s Kitchen</h1>
      <p>Copyright {year}</p>
    </header>
  );
}
const items = [
  "Macroni and Cheese",
  "Salmon with Potatoes",
  "Butter Naan with Curry",
  "Chicken Dum Biryani",
];
const dishObjects = items.map((dish, i) => ({
  id: i,
  title: dish,
}));
// console.log(dishObjects);
function Main({ dishes, openStatus, onStatus }) {
  return (
    <>
      <div>
        <button onClick={() => onStatus(true)}> I want to be Open</button>
        <h2>
          Welcome to this beautiful restaurant! {openStatus ? "Open" : "Closed"}
        </h2>
      </div>
      <main>
        <img
          src={chef}
          // src="https://github.com/eveporcello.png"
          height={200}
          alt="A photo of a smiling chef"
        />
        <ul>
          {dishes.map((dish) => (
            <li key={dish.id} style={{ listStyleType: "none" }}>
              {dish.title}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
}

function App() {
  // const [status, setStatus] = useState(true);
  const [status, toggle] = useReducer((status) => !status, true);
  useEffect(() => {
    console.log(`The restaurant is ${status ? "open" : "closed"}.`);
  }, [status]);
  return (
    <div>
      <h1>The Restaturant is currently {status ? "Open" : "Closed"}</h1>
      <button onClick={toggle}>{!status ? "Open" : "Close"} Restaturant</button>
      <Header name="Siva" year={new Date().getFullYear()} />
      <Main dishes={dishObjects} openStatus={status} onStatus={toggle} />
    </div>
  );
}

export default App;

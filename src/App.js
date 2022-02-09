import { useState } from "react";
import "./App.css";
import Item from "./components/Item";
import Profile from "./components/Profile";

function App() {
  const data = [
    {
      title: "Work",
      timeframes: {
        daily: {
          current: 5,
          previous: 7,
        },
        weekly: {
          current: 32,
          previous: 36,
        },
        monthly: {
          current: 103,
          previous: 128,
        },
      },
    },
    {
      title: "Play",
      timeframes: {
        daily: {
          current: 1,
          previous: 2,
        },
        weekly: {
          current: 10,
          previous: 8,
        },
        monthly: {
          current: 23,
          previous: 29,
        },
      },
    },
    {
      title: "Study",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 7,
        },
        monthly: {
          current: 13,
          previous: 19,
        },
      },
    },
    {
      title: "Exercise",
      timeframes: {
        daily: {
          current: 1,
          previous: 1,
        },
        weekly: {
          current: 4,
          previous: 5,
        },
        monthly: {
          current: 11,
          previous: 18,
        },
      },
    },
    {
      title: "Social",
      timeframes: {
        daily: {
          current: 1,
          previous: 3,
        },
        weekly: {
          current: 5,
          previous: 10,
        },
        monthly: {
          current: 21,
          previous: 23,
        },
      },
    },
    {
      title: "Self Care",
      timeframes: {
        daily: {
          current: 0,
          previous: 1,
        },
        weekly: {
          current: 2,
          previous: 2,
        },
        monthly: {
          current: 7,
          previous: 11,
        },
      },
    },
  ];
  const [display, setDisplay] = useState("weekly");
  return (
    <main className="container mx-auto md:absolute md:bottom-1/2 md:right-1/2 md:translate-x-1/2 md:translate-y-1/2 transform flex justify-center">
      <div className="md:w-3/4 w-4/5 grid md:grid-cols-4 gap-5 py-10">
        <Profile setDisplay={setDisplay} display={display} />
        {data.map((itemData) => (
          <Item itemData={itemData} key={itemData.title} display={display} />
        ))}
      </div>
    </main>
  );
}

export default App;

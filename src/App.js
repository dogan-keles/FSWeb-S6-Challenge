import axios from "axios";
import React, { useEffect, useState } from "react";
import Karakter from "./components/Karakter";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [karakterlerListesi, setKarakterlerListesi] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/")
      .then((response) => {
        console.log(response.data);
        setKarakterlerListesi(response.data);
      })
      .catch((error) => {
        console.log("Error is :", error);
      });

    axios.get("https://swapi.dev/api/films/4/").then((response) => {
      console.log(response.data);
      setEpisodes([response.data]);
    });
  }, []);

  return (
    <div className="App">
      <h1 className="Header">REACT WARS </h1>
      <h1 className="Ok">↓</h1>

      {karakterlerListesi.map((karakter, index) => {
        return <Karakter key={index} karakter={karakter} episodes={episodes} />;
      })}
    </div>
  );
};

export default App;

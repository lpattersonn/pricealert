import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

function App() {
  let [ticker, setTicker] = useState([]);
  let [search, setSearch] = useState("");

  axios
    .get(`${search}.json`)
    .then((res) => {
      setTicker(res.ticker);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className='App'>
      <form
        onSubmit={(e) => {
          setSearch(e.target.value);
          console.log(search);
        }}>
        <input type='text' name='search' value={search} />
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;

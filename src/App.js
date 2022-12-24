import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";

function App() {
  let [ticker, setTicker] = useState([]);
  let [search, setSearch] = useState("");
  let [searchValue, setSearchValue] = useState("");

  axios
    .get(`${searchValue.toUpperCase}`)
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
          setSearchValue(search);
          console.log(search);
        }}>
        <input
          type='text'
          name='search'
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
        />
        <input type='submit' />
      </form>
    </div>
  );
}

export default App;

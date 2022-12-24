import React, { useState } from "react";
import "./App.css";
import axios from "axios";
import { ThemeConsumer } from "react-bootstrap/esm/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  let [ticker, setTicker] = useState([]);
  let [search, setSearch] = useState("");

  axios
    .get(`https://webapi.thecse.com/trading/listed/securities/${search}.json`)
    .then((res) => {
      setTicker(res.ticker);
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className='row App'>
      <div className='wrap'>
        <form>
          <input
            class='form-control'
            id='exampleFormControlInput1'
            type='text'
            name='search'
            placeholder='Enter A TSX stock symbol'
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            value={search}
          />
        </form>
        <div></div>
      </div>
    </div>
  );
}

export default App;

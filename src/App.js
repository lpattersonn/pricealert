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
    .get(``)
    .then((res) => {
      setTicker(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
  return (
    <div className='row App'>
      <div className='wrap'>
        <form>
          <input
            className='form-control'
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
        <table className='table'>
          <thead>
            <tr>
              <th scope='col'>Symbol</th>
              <th scope='col'>First</th>
              <th scope='col'>Last</th>
              <th scope='col'>Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope='row'>3</th>
              <td>Larry</td>
              <td>the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

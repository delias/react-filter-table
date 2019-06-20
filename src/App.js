import React, { useState, useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import FilterInput from "./components/FilterInput";
import ShowTable from "./components/ShowTable";
import Distances from "./components/Distances";

const getDataFromServer = async function(endpoint) {
  let data = fetch(endpoint, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) throw Error(response.statusText);
      return response;
    })
    .then(response => response.json());

  return await data;
};
function App() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [listOfDistances, setListOfDistances] = useState([]);

  useEffect(() => {
    let endpoint = "/race.json";
    getDataFromServer(endpoint).then(data => {
      setData(data);
      setFilteredData(data);
      // console.log(data);
      setListOfDistances([...new Set(data.map(item => item.Dist))]);
    });
  }, []);

  function filter(value) {
    // console.log("Filter function", value);
    setFilteredData(data.filter(item => item.Sexo === value));
    // console.log(filteredData);
  }

  function filterInput(value) {
    setFilteredData(
      data.filter(
        item => item.Nombres.toLowerCase().indexOf(value.toLowerCase()) !== -1
      )
    );
  }

  return (
    <div>
      <h1>Race Results</h1>
      <FilterButtons filter={filter} />
      <FilterInput filterInput={filterInput} />
      <Distances data={listOfDistances} />
      <ShowTable data={filteredData} />
    </div>
  );
}

export default App;

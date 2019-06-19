import React, { useState, useEffect } from "react";
import FilterButtons from "./components/FilterButtons";
import FilterInput from "./components/FilterInput";
import ShowTable from "./components/ShowTable";

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

  useEffect(() => {
    let endpoint = "/race.json";
    getDataFromServer(endpoint).then(data => {
      setData(data);
      setFilteredData(data);
    });
  }, []);

  function filter(value) {
    // console.log("Filter function", value);
    setFilteredData(data.filter(item => item.Sexo === value));
    // console.log(filteredData);
  }

  return (
    <div>
      <h1>Race Results</h1>
      <FilterButtons filter={filter} />
      <FilterInput />
      <ShowTable data={filteredData} />
    </div>
  );
}

export default App;

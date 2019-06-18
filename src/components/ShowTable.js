import React from "react";
import RowTable from "./RowTable";

export default function ShowTable(props) {
  const data = props.data;
  // console.log(data);
  let rows = data.map(item => {
    return (
      <RowTable
        key={item.Num}
        nombres={item.Nombres}
        apellidos={item.Apellidos}
        sexo={item.Sexo}
      />
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>firstname</th>
            <th>lastname</th>
            <th>sex</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

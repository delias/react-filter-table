import React from "react";
import RowTable from "./RowTable";

export default function ShowTable(props) {
  const data = props.data;
  // console.log(data);
  const rows = data.map(item => {
    return (
      <RowTable
        key={item.Num}
        nombres={item.Nombres}
        apellidos={item.Apellidos}
        sexo={item.Sexo}
        distance={item.Dist}
      />
    );
  });
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Sex</th>
            <th>Distance</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

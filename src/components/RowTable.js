import React from "react";

export default function RowTable(props) {
  const nombres = props.nombres;
  const apellidos = props.apellidos;
  const sexo = props.sexo;
  const distance = props.distance;
  return (
    <tr>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{sexo}</td>
      <td>{distance}</td>
    </tr>
  );
}

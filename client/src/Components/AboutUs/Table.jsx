import React, { useMemo } from "react";
import { COLUMNS } from "./Table/columns";
import DEVS_DATA from "./developers/devs.json";
import "./Table/Table.css";

const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DEVS_DATA, []);

  return (
    <div>
      <table className="table-auto">
        <thead>
          {columns.map((column) => (
            <th> {column.Header} </th>
          ))}
        </thead>

        <tbody>
          {data.map((dev) => (
            <tr>
              <td> {dev.nombre} </td>
              <td> {dev.area} </td>
              <td> {dev.email} </td>
              <td> {dev.nacionalidad} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

import React, { useMemo } from "react";
import { COLUMNS } from "./Table/columns";
import DEVS_DATA from "./developers/devs.json";
import "./Table/Table.css";
import { v4 as uuidv4 } from "uuid"


const Table = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => DEVS_DATA, []);

  return (
    <div>
      <table className="table-auto">
        <thead>
          <tr>
          {columns.map((column) => (
            <th key={uuidv4()}> {column.Header} </th>
          ))}
          </tr>
        </thead>

        <tbody>
          {data.map((dev) => (
            <tr key={uuidv4()}>
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

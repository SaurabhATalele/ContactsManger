import {useTable} from "react-table"
import '../Styles/Table.css'
import { useNavigate } from "react-router-dom"

import React from 'react'

const Tables = ({tableData,cols}) => {
  const navigate = useNavigate();
    
  const data = React.useMemo(() => tableData, []);
  const columns =  React.useMemo(
    () => cols,
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
  useTable({ columns, data });
  return (
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
                <th>Actions</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                  ))}
                  <td><button className="Edit" onClick={()=>{
                    navigate(`/Edit/${row.cells[0].value}/${row.cells[1].value}/${row.cells[2].value}/${row.cells[3].value}`)
                  }}>Edit</button></td>
                 
                </tr>
              );
            })}
          </tbody>
        </table>
     
  );
}


export default Tables;
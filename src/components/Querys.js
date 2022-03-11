import React from "react";
import { gql, useQuery } from "@apollo/client";
import {TableRow, TableCell}from "@mui/material";

const GET_EMPLOYEES = gql`
   query{
        employees{
    id
    name_employee
    lname_employee
    email_employee
    nationality

  }
  }
`;

export default function Employee_lists(){
        const data = useQuery(GET_EMPLOYEES);
        return data.map(({id,name_employee,lname_employee,email_employee,nationality})=>(
            <TableRow
                key={data.employees.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {data.employees.name_employee}
                </TableCell>
                <TableCell align="right">{data.employees.lname_employee}</TableCell>
                <TableCell align="right">{data.employees.email_employee}</TableCell>
                <TableCell align="right">{data.employees.nationality}</TableCell>
              </TableRow>
            ));
}


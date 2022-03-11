import React from "react";
import {
  Input,
  TableRow,
  TableContainer,
  Table,
  TableBody,
  TableCell,
  TableHead,
  Paper,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Grid,
  CircularProgress,
  Container 
} from "@mui/material";

import { gql, useQuery } from "@apollo/client";

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

function createData() {
  return {};
}

const rows = [];

export default function EmployeeLists() {
  const [filter, setFilter] = React.useState("");

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
    const {loading,data } = useQuery(GET_EMPLOYEES)    
    

    return (
    <Container component="div" sx={{ whiteSpace: "normal", my: 2, p: 1 }}>
      <Container component="div" sx={{ whiteSpace: "normal", my: 1, p: 1 }}>
        <Grid container spacing={1} alignItems="flex-end" >
          <Grid item xs={7} >
            <Input fullWidth placeholder="Search .." />
          </Grid>
          <Grid item xs={2}>
            <Box sx={{ minWidth: 100 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Filter</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={filter}
                  label="filter"
                  onChange={handleChange}
                >
                  <MenuItem value={10}>ID employee</MenuItem>
                  <MenuItem value={20}>Name</MenuItem>
                  <MenuItem value={30}>Last Name</MenuItem>
                  <MenuItem value={40}>Email</MenuItem>
                  <MenuItem value={50}>Nationality</MenuItem>
                  <MenuItem value={60}>Phone</MenuItem>
                  <MenuItem value={70}>Civil Status</MenuItem>
                  <MenuItem value={80}>Birthday</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID employee</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Last Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Nationality</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

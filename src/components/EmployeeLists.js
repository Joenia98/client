import React from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Box,
  CircularProgress,
  Grid,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

const GET_EMPLOYEES = gql`
  query {
    employees {
      id
      name_employee
      lname_employee
      email_employee
      phone_employee
      nationality
    }
  }
`;

function EployeeLists() {
  const [filter, setfilter] = React.useState("");

  const handleChange = (event) => {
    setfilter(event.target.value);
  };

  //Obtencion de la lista de empleados
  const { data, loading, error } = useQuery(GET_EMPLOYEES);
  console.log(data);

  if (error) return console.log(error);

  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid item xs={4}>
        <TextField
          id="standard-basic"
          label="Search"
          variant="standard"
          sx={{ width: "30ch" }}
        />

        <FormControl sx={{ m: 1, minWidth: 80 }}>
          <InputLabel id="demo-simple-select-autowidth-label">by</InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={filter}
            onChange={handleChange}
            autoWidth
            label="Filter by"
          >
            <MenuItem value={0}>Name</MenuItem>
            <MenuItem value={1}>Last Name</MenuItem>
            <MenuItem value={2}>E-mail</MenuItem>
            <MenuItem value={3}>Phone Number</MenuItem>
            <MenuItem value={4}></MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={10}>
        {loading ? (
          <Box sx={{ zIndex: "tooltip" }}>
            <CircularProgress />
          </Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 900 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">E-mail</TableCell>
                  <TableCell align="center">Phone Number</TableCell>
                  <TableCell align="center">Nationality</TableCell>
                  <TableCell align="center">More</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data &&
                  data.employees.map((employee) => (
                    <TableRow
                      key={employee.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row" align="center">
                        {employee.name_employee}
                      </TableCell>
                      <TableCell align="center">
                        {employee.lname_employee}
                      </TableCell>
                      <TableCell align="center">
                        {employee.email_employee}
                      </TableCell>
                      <TableCell align="center">
                        {employee.phone_employee}
                      </TableCell>
                      <TableCell align="center">
                        {employee.nationality}
                      </TableCell>
                      <TableCell align="center">
                        <MoreVertIcon />
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Grid>
    </Grid>
  );
}

export default EployeeLists;

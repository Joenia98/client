
import { gql, useQuery } from "@apollo/client";
import {Box,CircularProgress} from '@mui/material';

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

 function  EployeeLists(){

  
    const {data,loading, error} =  useQuery(GET_EMPLOYEES);
    
    if(error) return console.log(error);

    return (
      <>
      {
      loading
      ? 
        <Box sx={{zIndex: 'tooltip'}}>
        <CircularProgress />
        </Box>
      : data && data.employees.map(employee => employee.name_employee)
      }
      </>     

    )
}
  
export default EployeeLists;
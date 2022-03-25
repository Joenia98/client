import react from 'react'
import {gql,useLazyQuery} from '@apollo/client'

const FIND_EMPLOYEEBYID = gql`
 query findEmployeeById($id: String!){
    employee_by_id(id:$id) {
      id
      name_employee
      lname_employee
      email_employee
      nationality
      phone_employee
      civil_status
      birthday
    }
  }
`;



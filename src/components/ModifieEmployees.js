import React, { useState } from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { gql, useMutation } from "@apollo/client";

const UDATE_EMPLOYEE = gql`
  mutation updateEmployee(
    $id: ID!,
    $name: String!,
    $lname: String!,
    $email: String!,
    $phone: String!
  ) {
    updateEmployee(
      id: $id

      name_employee: $name

      lname_employee: $lname

      email_employee: $email

      phone_employee: $phone
    ) {
      id
      name_employee
      lname_employee
      email_employee
      phone_employee
    }
  }
`;

export default function Employeesmod(employee) {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [id, setId] = useState("");

  const [open, setOpen] = React.useState(false);
  const modifie = employee.value;

  const [updateEmployee] = useMutation(UDATE_EMPLOYEE);

  const handleClickOpen = () => {
    setId(modifie.id);
    setName(modifie.name_employee);
    setLname(modifie.lname_employee);
    setEmail(modifie.email_employee);
    setPhone(modifie.phone_employee);
    setOpen(true);
  };

  const handleClose = () => {
    setName("");
    setLname("");
    setEmail("");
    setPhone("");
    setOpen(false);
  };

  const handleChange = async() => {
    try{
    updateEmployee({ variables: { id, name, lname, email, phone } });
    }
    catch(e) {
       console.warn(e) 
      }
    setName("");
    setLname("");
    setEmail("");
    setPhone("");

    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>
        <MoreVertIcon />
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Use this space to view some information not visible into on the
            table, also you can modifie some of this
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            variable="name"
            label="Name"
            sx={{ m: 1, width: "20ch" }}
            defaultValue={modifie.name_employee}
            type="text"
            variant="standard"
            onChange={(evt) => setName(evt.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            variable="lname"
            label="Last Name"
            sx={{ m: 1, width: "20ch" }}
            defaultValue={modifie.lname_employee}
            type="text"
            variant="standard"
            onChange={(evt) => setLname(evt.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            variable="email"
            label="Email Address"
            sx={{ m: 1, width: "35ch" }}
            defaultValue={modifie.email_employee}
            type="email"
            variant="standard"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <TextField
            disabled
            autoFocus
            margin="dense"
            variable="nationality"
            label="Nationality"
            sx={{ m: 1, width: "15ch" }}
            defaultValue={modifie.nationality}
            type="text"
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            variable="phone"
            label="Phone"
            sx={{ m: 1, width: "15ch" }}
            defaultValue={modifie.phone_employee}
            type="phone"
            variant="standard"
            onChange={(evt) => setPhone(evt.target.value)}
          />
          <TextField
            disabled
            autoFocus
            margin="dense"
            variable="birthday"
            label="Birthday"
            sx={{ m: 1, width: "15ch" }}
            defaultValue={modifie.birthday}
            type="text"
            variant="standard"
          />
          <TextField
            disabled
            autoFocus
            margin="dense"
            variable="civil_status"
            label="Civil Status"
            sx={{ m: 1, width: "15ch" }}
            defaultValue={modifie.civil_status}
            type="text"
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleChange}>Change</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

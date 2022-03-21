import { AppBar, Box, Container, Toolbar, Typography, } from "@mui/material";
import {Link} from "react-router-dom";


export default function Employeesmod(){
    
    return (
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="static" color="default">
                <Container>
                    <Toolbar>
                        <Typography variant="h6" sx={{ flexGrow: 1}}>
                           <Link to="/" style={{textDecoration:'none'}}>Finder Project</Link> 
                        </Typography>
                    </Toolbar>   
                </Container>
            </AppBar>
        </Box>
    )
}
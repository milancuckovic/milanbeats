import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Menu(){
    return(
        <Navbar variant="dark" bg="transparent" expand="lg" className="shadow-sm">
            <Container fluid className="text-right">  
                <Navbar.Toggle/>              
                    <Link to="/" className="d-flex ho"><img src="./Images/logomilan.svg" width="35px"></img></Link>
                    <Navbar.Collapse>
                        <Nav className="me-auto my-2 my-lg-0 ">
                            <Link to="/" className="text-white text-decoration-none py-2 px-3 ho">Home</Link>
                            <Link to="/about" className="text-white text-decoration-none py-2 px-3 ho">About</Link>
                            <Link to="/contact" className="text-white text-decoration-none py-2 px-3 ho">Contact</Link>
                            <hr/>
                        </Nav>        
                    </Navbar.Collapse>
            </Container>          
         </Navbar>
    )
}

export default Menu;
import React from "react";
import {Nav, Navbar, Container} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Menu(){
    return(
        <Navbar variant="dark" bg="transparent" expand="lg" className="shadow-sm">
            <Container fluid className="text-right">  
                <Navbar.Toggle/>              
                    <Link to="/milanbeats/" className="d-flex ho"><img src="/milanbeats/Images/logomilan.svg" width="35px"></img></Link>
                    <Navbar.Collapse>
                        <Nav className="me-auto my-2 my-lg-0 ">
                            <Link to="/milanbeats/" className="text-white text-decoration-none py-2 px-3 ho">Home</Link>
                            <Link to="/milanbeats/about" className="text-white text-decoration-none py-2 px-3 ho">About</Link>
                            <Link to="/milanbeats/contact" className="text-white text-decoration-none py-2 px-3 ho">Contact</Link>
                            <hr/>
                        </Nav>        
                    </Navbar.Collapse>
            </Container>          
         </Navbar>
    )
}

export default Menu;
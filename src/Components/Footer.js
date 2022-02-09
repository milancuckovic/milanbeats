import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSoundcloud, faLinkedinIn, faGithub} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

function Footer(){
    return(
        
        <footer className="w-100 py-3 text-white footer">
        <div className="container">
            <div className="row p-2">
                <div className="col-lg-4 col-md-4">
                <h5 className="text-white mb-3">Quick links:</h5>
                    <ul className="list-unstyled text-muted">
                        <li><Link to="/milanbeats/" className="text-decoration-none text-white ho">Home</Link></li>
                        <li><Link to="/milanbeats/about" className="text-decoration-none text-white ho">About</Link></li>
                        <li><Link to="/milanbeats/contact" className="text-decoration-none text-white ho">Contact</Link></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4">
                    <h5 className="text-white mb-3">Used technologies:</h5>
                    <ul className="list-unstyled text-muted">
                        <li><a href="https://reactjs.org/" className="text-decoration-none text-white ho" target="_blank">React.js</a></li>
                        <li><a href="https://react-bootstrap.github.io/" className="text-decoration-none text-white ho" target="_blank">React-bootstrap</a></li>
                        <li><a href="https://www.json.org/json-en.html" className="text-decoration-none text-white ho" target="_blank">JSON</a></li>
                        <li><a href="https://github.com/" className="text-decoration-none text-white ho" target="_blank">GitHub for hosting</a></li>
                    </ul>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="d-flex">
                        <img src="/milanbeats/Images/logomilan.svg" className="p-0 m-0" width="80px" height="80px" />
                        <p className="small text-muted mt-2">M I L A N<br/>All these beats are composed by me.<br/> I hope you will enjoy it. </p>
                    </div>
                    <p className="small text-muted mb-0">&copy; Copyrights | All rights reserved | 2022 </p>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <p className="text-center p-2 m-2">
                        <a href="https://github.com/milancuckovic" className="text-white ho p-2" target="_blank"><FontAwesomeIcon icon={faGithub}/></a>
                        <a href="https://www.linkedin.com/in/milan-cuckovic/" className="text-white ho p-2" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                        <a href="https://soundcloud.com/m_i_l_a_n" className="text-white ho p-2" target="_blank"><FontAwesomeIcon icon={faSoundcloud}/></a>
                    </p>
                </div>
            </div>
        </div>
    </footer>
    
    )
}

export default Footer;
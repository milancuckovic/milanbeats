import React from "react";
import Card from "./Card";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSoundcloud} from '@fortawesome/free-brands-svg-icons';

function Section(){
    return(
        <div className="section">
            <Card/>
            <h2 className="mt-4 p-4 text-center text-white">Please follow me on <a className="text-decoration-none text-warning ho" href="https://soundcloud.com/m_i_l_a_n" target="_blank">SoundCloud <FontAwesomeIcon icon={faSoundcloud}/></a></h2>
        </div>
    )
}

export default Section;
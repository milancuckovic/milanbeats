import React from "react";
import Menu from './Menu';
import Stars from "./Stars";

function Header(){
    return(
        <div>
            <Menu/>
            <Stars/>
            <div className="info">
                <div className="info-logo">
                    <img src="/milanbeats/Images/logomilan.svg" className="float-start logo-header p-0 m-0" />
                    <h1 className="milan">MILAN</h1>
                </div>
                <div>
                    <p className="info-bio">Hello, my name is Milan Čučković. I'm a web developer from Serbia, and my hobby is making beats.<br/>All my beats are composed with love and passion. Of course, all these beats are free to use, so downloading is possible.<br/> Mention me in your song description, and point to my website or Soundcloud profile. If you accidentally forget to mention me, it isn't a problem. <br/> Have a nice day and enjoy to listen my beats. See you!</p>
                </div>
            </div>  
        </div>
    )
}
export default Header;
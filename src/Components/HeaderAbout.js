import React from 'react';
import Menu from './Menu';
import Stars from './Stars';

export default function HeaderAbout() {
  return (
    <div>
        <Menu/>
        <Stars/>
        <div className="info text-center text-white">
            <h1>About me:</h1>
            <div>
                <p className='h5 p-4 text-shadow'>Hello, my name is Milan Čučković. <br/>I'm a web developer from Serbia, and my hobby is making beats.<br/>All my beats are composed with love and passion.<br/>Of course, all these beats are free to use, so downloading is possible.<br/> Mention me in your song description, and point to my website or Soundcloud profile. If you accidentally forget to mention me, it isn't a problem.<br/> Have a nice day and enjoy to listen my beats. <br/> See you!</p>
            </div>
            <div className="info-logo">
                <img src="./Images/logomilan.svg" className="text-center img-fluid p-0 m-0" />
                <h1 className='milan-about'>MILAN</h1>
            </div>
        </div>  
    </div>
);
}

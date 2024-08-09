import React from 'react';
import logo from '/public/images/logo.svg';
import settings from '../assets/settings.png';

import './app.css'



const Header = ({isHome}) => {
    return(

           <div className='container'>
                
               { isHome ?

                <>
                 <a href="/home">
                            <img className="logo" src={logo} alt="logo" />
                           
                        </a>
                        <a className='app-name' href="/home">
                            Tato Chinese
                        </a>
                <nav className='navbar'>
                    <span className='nav-item'><a href="/">Course</a></span>
                    <span className='nav-item'><a href="/sentences">Random</a></span>
                    <span className='nav-item'><a href="/">Custom</a></span>
                    <span className='nav-item'><a href="/">Settings</a></span>
                    
                </nav>
                </>
                    :
                    <div className='logo-container'> 
                   
                        <a href="/home">
                            <img className="logo" src={logo} alt="logo" />
                           
                        </a>
                        <a className='app-name' href="/home">
                            Tato Chinese
                        </a>
                    </div>    
                
                }
            
            

               {/* <button className='getStarted'>GET STARTED</button>*/}

          </div>  
                   
        
        
        

    );

}



export default Header
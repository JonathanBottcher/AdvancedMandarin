import React from 'react';
import './home_style.css';
import Header from '../Header';



import { IconContext } from 'react-icons/lib';

//Icons
import { FaRandom } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaPenRuler } from "react-icons/fa6";


function Home(){









return(

<>

<Header isHome={false} />
    <div className='main-mode-container'>
        <a className='mode-links' href="/standard">
        <div className="mode-container">
            <IconContext.Provider value={{className:'react-icon'}}>
                <FaBook size={70} />
            </IconContext.Provider>
            <div className="lower-mode-container">
            <span className='mode-title'>Standard Learning</span>  
            <p className='mode-paragraph'>Study the pre-selected senteces we've carefully chosen for you</p>
            </div>   
        </div>
        </a>
        <a className='mode-links' href="/sentences">
        <div className="mode-container">
            <IconContext.Provider value={{className:'react-icon'}}>    
                    <FaRandom size={70} />
            </IconContext.Provider>
            <div className="lower-mode-container">
            <span className='mode-title'>Random Learning</span>
            <p className='mode-paragraph'>Pick a level and study from an infinite supply of random sentences</p>
            </div>
        </div>
        </a>
        <a id='cl-buttton' className='mode-links'  href="/sentences">
        <div className="mode-container">
            <IconContext.Provider value={{className:'react-icon'}}>    
                <FaPenRuler size={70} />
            </IconContext.Provider>
            <div  className='lower-mode-container' id='lower-mode-container'>
            <span className='mode-title'>Custom Learning</span>
            <p className='mode-paragraph'>Make your own learning path with custom sentences</p>
            </div>
        </div>
        </a>


    </div>











</>









    
);





}
export default Home;
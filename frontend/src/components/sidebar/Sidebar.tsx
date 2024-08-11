import React from "react";
import './styles.css';

//Import icons
import { CiSettings } from "react-icons/ci";
import { GiStonePath } from "react-icons/gi";
import { FaRandom } from "react-icons/fa";
import { MdOutlineAccountCircle } from "react-icons/md";



function Sidebar(){



    return(

            <div className="nav-container">
                <nav>
                    <h1 style={{color:"white"}}>Here goes the logo</h1>
                    <ul className="nav-list">
                        <li className="nav-li"><a className="nav-a" href="/">
                        <GiStonePath size={30} style={{marginLeft:'2%'}}/>Guided</a>
                        </li>
                        <li className="nav-li">
                            <a className="nav-a" href="/random-learning"><FaRandom size={25} style={{marginLeft:'2%'}}/>Random</a>
                        </li>
                        <li className="nav-li"><a className="nav-a" href="/"><CiSettings size={30} style={{marginLeft:'2%'}}/>Settings</a></li>
                        <li className="nav-li"><a className="nav-a" href="/"><MdOutlineAccountCircle  size={30} style={{marginLeft:'2%'}}/>Account</a></li>
                    </ul>
                </nav>
            </div>








    );


}

export default Sidebar;
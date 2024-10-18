import React, {createElement, useEffect} from "react";
import SentenceCard from "./SentenceCard";
import Navbar from "./Navbar/Navbar";




//level-1
//level-2
//level-3
//level-4
//etc
function RandomLearning({level}){




    return(

        <> 
            
            
            <Navbar />
            <SentenceCard fetch={level}/>
             
           
        </>
        










    );







}
export default RandomLearning;
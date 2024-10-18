import React, { useState } from 'react';
import  useFetch  from '../../hooks/useFetch';
import './styles.css';
import switch_script from './switch_script'
import SentenceCard from '../SentenceCard';
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

//test
import Navbar from '../Navbar/Sidebar';

 function FetchS(){
    //let trad = '繁体';
    //let simp = '简体';
  
    
   
  
    

  
 
        return(
            <>   
            
              
                       
                        
                       
            
                        
                        <SentenceCard fetch={'hsk1'} />
                   
                    {/*<Navbar/>*/}
                    
                
            </>)




}

    export default FetchS;
    
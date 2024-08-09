import React, {useState} from "react";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import './sentence_card.css';
import useFetch from "../hooks/useFetch";
import switch_script from "./sentences/switch_script";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";


function SentenceCard({fetch}){

//make fetch 'hsk1' for testning
//retrieve sentences from django API
const { data, isLoading, error } = useFetch('http://127.0.0.1:8000/api/' + fetch + '/');


let original : string = '';
let translation : string = '';

let [count, setCount] = useState(0)

if (data){
    let result_o = data.map(item => item.original)
    original = switch_script(result_o[count], 1)
    let result_t = data.map(item => item.translation)
    translation = result_t[count]
             
}

let tradSentence = switch_script(original, 0) 

let [isTrad, setTrad] = useState(false)
let mSentence = original;

function handleScript(){
    setTrad(!isTrad)



}



    return(
        <>
        <button className='switch-button' type="button" title='Show simplified' onClick={handleScript} id="char-switch">{isTrad ? <span> Traditional</span> : <span>Simplified</span>}</button>
            <div className='top-buttons'>
                    <a href="#"><TiStarOutline color="black" size={40} /></a>
                        
            </div>
            <div className="sentence-container">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            <button className='switch-sentence prev' onClick={()=>setCount(count - 1)}><TiArrowLeftThick size={40} /></button>
            <button className='switch-sentence next' onClick={()=>setCount(count + 1)}><TiArrowRightThick size={40} /></button>
                <table>
                    <tbody>
                        <tr className="tr-class">
                            <td>{isTrad? mSentence:tradSentence}</td>
                            </tr>
                        <tr className="tr-class">
                            <td>{translation}</td>
                            </tr>
                    </tbody>
                </table>
               
            </div>

            <div className='learning-footer'>
                <span className='tatoeba-disclaimer'>Sentences provided by Tatoeba </span>
            </div>
            
            
       </>
        
    );
}


export default SentenceCard;
import React, {useState, useEffect} from "react";
import { TiStarOutline } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import './sentence_card.css';
import useFetch from "../hooks/useFetch";
import switch_script from "./sentences/switch_script";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

declare const mandarinspot: any;
function SentenceCard({fetch}){
//This useffect is causing the bug that creates a space between characters when clicking next or prev

useEffect(
    ()=>{
            const script = document.createElement("script");
            script.src = '//mandarinspot.com/static/mandarinspot.min.js';
            script.async = true;
            document.body.appendChild(script);
            script.onload = () => {
                if (typeof mandarinspot !== 'undefined') {
                    console.log("mandarinspot is defined.");
                    mandarinspot.annotate();
                }else{
                    console.log('mandarinspot is not defined')
                }
              
            };
            script.onerror = ()=>{console.log("failed to load script");}
    
            return ()=>{
                document.body.removeChild(script);
            }
    
        
    
        }
    
    
    
    )      
            


//make fetch 'hsk1' for testning
//retrieve sentences from django API
const { data, isLoading, error } = useFetch('http://127.0.0.1:8000/api/' + fetch + '/');


let original : string = '';
let translation : string = '';
let pinyin : string = '';

let [count, setCount] = useState(0)
if(count == 10){
    setCount(0)
}

if (data){
    let result_o = data.map(item => item.original)
    original = switch_script(result_o[count], 1)
    let result_t = data.map(item => item.translation)
    translation = result_t[count]
    let result_p  = data.map(item=>item.pinyin)
    pinyin = result_p[count]             
}

let tradSentence = switch_script(original, 0) 

let [isTrad, setTrad] = useState(false)
let mSentence = original;

function handleNext(){
    if (count != 9){
    setCount(count + 1)
    }
    else{
        setCount(0)
    }
}
function handlePrev(){
    if (count != 0){
    setCount(count - 1)
    }
    else{
        setCount(9)
    }
}

function handleScript(){
    setTrad(!isTrad)
 
}
const [searchTerm, setSearchTerm] = useState('');
//add function that when user press the letter s when hovering a word it will serach for it automatically on tatoeba
function handleInput(event){
    setSearchTerm(event.target.value);
}
function handleSubmit(){
    let tatoLink = 'https://tatoeba.org/en/sentences/search?from=cmn&query=' + encodeURI(searchTerm) +'&to=eng';
    window.open(tatoLink, '_blank');

}
let sentence = isTrad ? tradSentence : mSentence
    return(
        <div className="general-container">
        <span className="sentence-counter">Sentence {count + 1} of 10</span>
        <button className='switch-button' type="button" title='Show simplified' onClick={handleScript} id="char-switch">{isTrad ? <span> Traditional</span> : <span>Simplified</span>}</button>
            <div className='top-buttons'>
                    <a href="#"><TiStarOutline color="black" size={40} /></a>
                        
            </div>
            <button className='switch-sentence prev' onClick={handlePrev}><TiArrowLeftThick color="white" size={40} /></button>
            <button className='switch-sentence next' onClick={handleNext}><TiArrowRightThick color="white" size={40} /></button>
            <div className="sentence-container">
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}
            
                <table>
                    <tbody>
                    <tr className="tr-class">
                            <td className="card-td">{pinyin}</td>
                            </tr>    
                        <tr className="tr-class">
                            <td className="card-td line">{sentence}</td>
                            </tr>
                      
                        <tr className="tr-class">
                            <td className="card-td line">{translation}</td>
                            </tr>
                    </tbody>
                </table>
              
              <div id="search-tato">
                    <form onSubmit={handleSubmit}>
                        <input placeholder="eg  : 我" value={searchTerm} onChange={handleInput}  type="text" />
                        <label htmlFor="">search on tatoeba</label>
                        <button type="submit">Search</button>

                    </form>

              </div>
               
            </div>
            {/*
            <div className='learning-footer'>
                <span className='tatoeba-disclaimer'>Sentences provided by Tatoeba </span>
            </div>
            */}
            </div>
        
    );
}


export default SentenceCard;
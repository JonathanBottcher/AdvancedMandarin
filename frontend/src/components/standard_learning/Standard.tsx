import React, {useState} from "react";
import './standard.css';
import Lessons from './Lessons'


function Standard(){
const items = {'Lesson 4' : {
    lessonLink : '/sentences',
    lessonDesc : '什么, 叫, 名字',
    
        
        },
        'Lesson 1' : {
    lessonLink : '/sentences',
    lessonDesc : '你, 好',
   

},
'Lesson 2' : {
    lessonLink : '/sentences',
    lessonDesc : '我, 是',
  
    
    },

'Lesson 3' : {
    lessonLink : '/sentences',
    lessonDesc : '什么, 叫, 名字',
    
        
        },
}

const test = {
    'test' : {
    lessonLink : '/sentences',
    lessonDesc : 'test, test',
    
    
    }
}
const[level, setLevel] = useState(items);

const [open, setOpen] = useState(false);
function handleClick(test1){
    setOpen(true)
    console.log('render')
    if(test1 == test ){
        setLevel(test1)
    }else if (test1 == items){
        setLevel(items)
    }
}

const levels = {'Beginner' : items, 'Beginner 2': test, 'Beginner 3': items, 'Intermediate': items, 'Intermediate 2': items, 'Intermediate 3': items, 'Advanced': items, 'Advanced 2': items, 'Advanced 3': items};

    return(
        <>
            <div className="selection-container">
                {
                    Object.keys(levels).map((item, i)=>(
                        <a href="#" onClick={()=>handleClick(levels[item])} className="level-selection">{item}</a>
                        
                    ))
                
                        
                }
                
                {open && <Lessons lessonObj={level} />}
                
                {/*<a onClick={handleClick} href="#" className="level-selection">Beginner</a>
                {open && <Lessons lessonObj={items} />}
                <a href="#" className="level-selection">Beginner 2</a>
                <a href="#" className="level-selection">Beginner 3</a>
                <a href="#" className="level-selection">Intermediate</a>
                <a href="#" className="level-selection">Intermediate 2</a>
                <a href="#" className="level-selection">Intermediate 3</a>
                <a href="#" className="level-selection">Advanced</a>
                <a href="#" className="level-selection">Advanced 2</a>
                <a href="#" className="level-selection">Advanced 3</a>*/}
                        
                        
            </div>
        </>






    );
}

export default Standard;
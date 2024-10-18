import './standard_sentences.css';
import FetchHsk1 from '../sentences/FetchS';
import Lessons from './Lessons';
import React from 'react';

let items = {
'Lesson 1' : {
    lessonLink : '/sentences',
    lessonDesc : '你, 好',
    level : 'Beginner'

},
'Lesson 2' : {
    lessonLink : '/sentences',
    lessonDesc : '我, 是',
    level : 'Beginner'
    
    },

'Lesson 3' : {
    lessonLink : '/sentences',
    lessonDesc : '什么, 叫, 名字',
    level : 'Beginner'
        
        },
'Lesson 4' : {
    lessonLink : '/sentences',
    lessonDesc : '什么, 叫, 名字',
    level : 'Intermediate'
        
        }

};

function Standard_sentences(){
return(
    <>
        <Lessons lessonObj={items} />
        <FetchHsk1 />

    </>
)
}
export default Standard_sentences;
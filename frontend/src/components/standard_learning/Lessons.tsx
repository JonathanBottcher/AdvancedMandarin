import './lessons.css';
import React from 'react';
type LessonItem = {lessonTitle : string, lessonDesc : string,lessonNumber : string, lessonLink : string, row? : number, column? : number};
interface LessonProps {lessons : LessonItem[]};

function Lessons({lessons} : LessonProps){

    return(
    
        <div className="lesson-container">
            
            {
                lessons.map((item, i)=>(
                <a className='lesson-selection' href={item.lessonLink}>
                    
                    {item.lessonTitle}
                    <p className='lesson-desc'>{item.lessonDesc}</p>
                </a>))
            }
      
    </div>







    );



}

export default Lessons;
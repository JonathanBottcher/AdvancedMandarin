import './lessons.css';
import React from 'react';



function Lessons({lessonObj = {}} = {}){

    return(
    
        <div className="lesson-container">
            
            {
                Object.keys(lessonObj).map((item, i)=>(
                <a className='lesson-selection' href={lessonObj[item]?.lessonLink}>
                    
                    {item}
                    <p className='lesson-desc'>{lessonObj[item]?.lessonDesc}</p>
                </a>)) 
            }
      
    </div>







    )



}

export default Lessons;
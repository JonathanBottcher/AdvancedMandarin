import './styles.css';
import React from 'react';

import Header from '../Header';

function Welcome(){




    return(
    <>
       <Header isHome={false}/>
        <div className="row">
            <div className='column'>
                <h4 className='head-title'>Choose a level and learn Mandarin Chinese!</h4>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti sapiente dicta consequuntur ea explicabo, cupiditate odit autem quis perferendis id labore doloremque facere vitae molestiae, neque corporis ut animi repellat.</p>
            </div>
            <div className='column'>
                <button type='button' className='start-button'>Start learning</button>
            </div>
            
           
        </div>
            
        
    </>


    );
}
export default Welcome;

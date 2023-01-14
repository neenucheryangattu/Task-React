import React from 'react'
import {Traits} from './style'
import traitimage from "../../Images/traits.png"
import tickmark from "../../Images/tickMark.png"
function CaringTraits() {
  return (
    <Traits>
        <div className='traits-section'>
           
            <div className='traits-image'>
               <img src={traitimage}/>
            </div>
            <div className='caring-traits'>
             <h1>What Do We Do To Make Our Employees Stay Happy And Satisfied ?</h1>
             <ul>
                <li>
                    <img src={tickmark}/>
                    <p>Listen to them. We give opportunities for them to express their views- personal and official.</p>
                </li>
                <li>
                    <img src={tickmark}/>
                    <p>Appreciate the employees for the effort put in verbally and also through incentives, awards, accolades and public acknowledgements in meetings.</p>
                </li>
                <li>
                    <img src={tickmark}/>
                    <p>Organise training programmes to enhance their professional skills, and also for personal re engineering to build strong self- esteem, develop interpersonal, social, team communication skills and attitude.</p>
                </li>
                <li>
                    <img src={tickmark}/>
                    <p>The work environment is made proactive, positive, calm, joyful, effective, productive and enjoyable through meditation and other Self Building activities.</p>
                </li>
             </ul>
            </div>
            </div>
           
      
    </Traits>
  )
}

export default CaringTraits
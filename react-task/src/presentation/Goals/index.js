import React from 'react'
import {Goal} from './style'
import vision from "../../Images/vision.png" 
function Goalspart() {
  return (
    <Goal>
       <div className='goalsection'>
        <div className='vision'>
                 <div className='vision-box'>
                  <h1>our vision</h1> 
                  <p>Our vision is to provide prime value to customers by delivering supreme quality undergarments in the global market with the intent to touch the lives of our employees, immediate society and the world community with the understanding -‘we exist because they exist’.</p>   
                 </div>
                 <div className='goal-image'>

                 </div>
        </div>
        <div className='mission'>
        <div className='mision-box'>
                  <h1>our mision</h1> 
                  <p>Our mission is to put in effort wholeheartedly to.</p> 
                  <ul>
                    <li>Ensure the quality of the product excellence through monitoring at every stages of production till delivery and customer satisfaction.</li>
                    <li>Focus on widening the business every year through a progressive approach of associating with prospective textile shops, appointing distributors and contracting with business agents.</li>
                    <li>Share part of the profit to ensure the welfare of the employees, society & the environment.</li>
                    </ul>  
                 </div>
        </div>
       </div>
    </Goal>
  )
}

export default Goalspart
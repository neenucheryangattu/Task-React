import React from 'react'
import { About } from './style'
import { HomeOutlined, RightOutlined } from "@ant-design/icons"
import aboutimg from '../../Images/aboutimage.png'
function Aboutus() {
    return (
        <About>
            <div className='about-section'>
                <div className='about-heading'>
                    <HomeOutlined style={{ color: "grey" }} />
                    <RightOutlined style={{ color: "grey" }} />
                    <h1>About Us</h1>
                </div>
                <div className='about-details'>
                    <h1>Happiness Is Our Culture</h1>
                    <p>The productivity and prosperity of an organisation is the reflection of the happiness and contentment of its employees. We believe that is what builds a family and the nation too. Happy employees are not just an asset to the organisation, but the love, contentment and enthusiasm they display build the whole world.So it is our prime responsibility to give a conducive, happy work culture for our employees, a climate which gives them opportunities for self growth and skill development.</p>
                    <div className='about-image'>
                        <img src={aboutimg}/>
                    </div>
                </div>
            </div>
        </About>
    )
}

export default Aboutus
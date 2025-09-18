import React from 'react'
import "./about.css";
import theme from "../../assets/theme_pattern.svg"

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src={theme} alt="" /> {/*theme*/}
        </div>

        <div className="about-section">

            <div className="about-left">
                <img src="" alt="" style={{width: "300px", height:"400px", border: "1px solid white"}}/> {/*profile image */}
            </div>

            <div className="about-right">
                <div className="about-para">
                    <p>I'm an experienced Frontend Developer with years of professional training in the field. Throughout my career, I have had the privillege of learning and contributing to prestigious organisations, contributing to their success and growth</p>
                    <p>My passion for Frontend development is not only reflected in the years I have committed but also in the enthusiasm and dedication I bring to each project</p>
                </div>
                <div className="about-skills">
                    <div className='about-skill'>
                        <p>HTML & CSS</p> 
                        <hr style={{width: "70%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>Javascript</p> 
                        <hr style={{width: "60%"}}/>
                    </div>
                    <div className='about-skill'>
                        <p>React Js</p> 
                        <hr style={{width: "80%"}}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERIENCE</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>20+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-achievement">
                    <h1>3+</h1>
                    <p>HAPPY ClIENTS</p>
                </div>
                {/* <hr /> */}
            </div>


    </div>
  )
}

export default About

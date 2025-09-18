import React from 'react'
import "./mywork.css"
import theme from "../../assets/theme_pattern.svg"
import mywork_data from "../../assets/mywork_data"
import arrowIcon from "../../assets/arrow_icon.svg"

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme} alt="" />
      </div>

      <div className="mywork-container">
        {/* create your own work */}
        {
            mywork_data?.map((work, index) => {
                return <img key={index} src={work.w_img} alt="" />
            })
        }
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrowIcon} alt="" />
      </div>
    </div>
  )
} 

export default MyWork

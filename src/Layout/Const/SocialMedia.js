import React from 'react'
import { TiSocialTwitter } from "react-icons/ti";
import { FaLinkedin,FaFacebook,FaInstagramSquare } from "react-icons/fa";
const SocialMedia = () => {
  return (
    <div className='SocialMedia absolute'>
      <div className='SocialMediaA'>
        
      <div className='Ibra'></div>
        <i className="Icon"><TiSocialTwitter/></i>
        <i className="Icon"><FaLinkedin/></i>
      </div>

        <div className='SocialMediaB'>


        <i className="Icon"><FaFacebook/></i>
        <i className="Icon"><FaInstagramSquare/></i>

      <div className='Ibra'></div>
      </div>
      </div>
  )
}

export default SocialMedia
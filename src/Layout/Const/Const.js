import React from 'react'
import BG from '../../image/Home/BG.png'
import BGM from '../../image/Home/BGM.png'
import Down from '../Down'
import Navbar from './Navbar'
import SocialMedia from './SocialMedia'
const Const = () => {
    return (
        <>
        <div className='Const absolute'>
            <picture>
                <source media='(max-width : 700px)' srcSet={BGM} alt='' />
                <img className='BG' id='BG' src={BG} alt=''  />
            </picture>
        <Navbar/>
        <SocialMedia/>

        </div>
        <Down/>

        </>
    )
}

export default Const
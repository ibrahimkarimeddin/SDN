import React, { useEffect } from 'react'
import Const from './Const/Const'
import Mid from './Mid'
import Top from './Top'

const Page = ({LeftSec,RightSec,MidSec}) => {

    useEffect(() => {
        function handleResize() {
            console.log( window.innerWidth, 'x', window.innerHeight)}
            window.addEventListener('resize', handleResize) 
    })

    return (
        <>
            <Const  />
            <div className='Page absolute'>
             <Top LeftSec={LeftSec} RightSec={RightSec} />
             <Mid MidSec={MidSec} />
            </div>
        </>
    )
}

export default Page
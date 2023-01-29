import React from 'react'
import { Link } from 'react-router-dom'
import BG_Down from '../image/Home/BG_Down.png'
import H_P from '../image/Laptop/H_P.png'
import S_P from '../image/Laptop/S_P.png'

const Down = () => {
 
function MouseEnter(event){
  event.target.src = "laptopk.png"
      event.target.className="Down_Item LapHover"
}
function MouseLeave(event){
  event.target.src=`${H_P}`
  event.target.className="Down_Item"
}

  return (
    <div className='Down' id='Down'>
      <img src={BG_Down} alt='' className='Down_BG' />
      <div className='Down_Items'>
      <Link className='Down_Item'onMouseEnter={(event) => MouseEnter(event)} onMouseLeave={(event) => MouseLeave(event)} onError={(e)=>e.target.src="laptopk.png"}>
        <img src={H_P} alt='' id='Laptop' className='Down_Item' />
      </Link>
      <Link className='Down_Item'>
        <img src={S_P} alt='' id='Laptop' className='Down_Item' />
      </Link>
      <Link className='Down_Item'>
        <img src={H_P} alt='' id='Laptop' className='Down_Item' />
      </Link>
      <Link className='Down_Item'>
        <img src={S_P} alt='' id='Laptop' className='Down_Item' />
      </Link>

</div>
    </div>
  )
}

export default Down
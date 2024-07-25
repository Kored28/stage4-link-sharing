import { Item } from '@app/api/links/route'
import React from 'react'

const LinkCard = async() => {
  return (
    <div className="flex items-center justify-between gap-[9px] bg-black
    p-[16px] rounded-lg"
    >
      <i className="fa-brands fa-twitter text-center text-white"></i>
      <p className="text-white text-[16px] font-normal w-[153px]">
        Twitter
      </p>
      <i className="fa-solid fa-arrow-right text-center text-white"></i>
    </div>
  )
}

export default LinkCard
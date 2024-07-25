import React from 'react'

const EmptyCard = () => {
  return (
    <div className="flex flex-col">
        <div className="flex items-center justify-between gap-[9px] bg-[#EEEEEE]
        p-[16px] rounded-lg"
        >
            <i className=" text-center text-white"></i>
            <p className="text-white text-[16px] font-normal w-[153px]">
            </p>
            <i className=" text-center text-white"></i>
        </div>
    </div>
  )
}

export default EmptyCard
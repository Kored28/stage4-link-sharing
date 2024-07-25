import Image from 'next/image'
import React from 'react'

const Inputs = () => {
  return (
    <div className="flex flex-col bg-[#FAFAFA] h-[228px] rounded-xl p-[20px] gap-[12px]">

        <div className="flex justify-between">
            <div className="flex gap-[8px]">
                <div className="flex flex-col justify-center items-center gap-[4px]">
                    <div className="bg-[#737373] h-[1px] w-[12px]" />
                    <div className="bg-[#737373] h-[1px] w-[12px]" />
                </div>

                <h1 className="m-input-heading">
                    Link #1
                </h1>
            </div>

            <p className='m-desc cursor-pointer'>
                Remove
            </p>
        </div>

        <div className="flex flex-col gap-[12px]">
            <div className="flex flex-col gap-[4px] relative">
                <label htmlFor="email" 
                className="text-[#333333] text-[12px]"
                >
                   PlatForm
                </label>
                <select 
                id="email"
                value="enter"
                className="border border-[#D9D9D9] w-full h-[48px]
                relative py-[12px] pr-[12px] pl-[38px] text-[16px]
                rounded-lg bg-white"
                >
                    <option value="enter" className='text-[#333333]'>
                        Enter platform
                    </option>
                    <option value="github">Github</option>
                    <option value=""></option>
                </select>
                <Image
                src="/assets/lope.png"
                alt="lock"
                width={12.52}
                height={14.53}
                className="absolute top-[42px] left-4"
                />
            </div>

            <div className="flex flex-col gap-[4px] relative">
                <label htmlFor="link" 
                className="text-[#333333] text-[12px]"
                >
                    Link
                </label>
                <input 
                type="text"
                id="link"
                placeholder="Enter your link"
                className="border border-[#D9D9D9] w-full h-[48px] outline-none
                relative py-[12px] pr-[12px] pl-[38px] text-[16px] bg-white 
                rounded-lg text-[#333333]"
                />
                <Image
                src="/assets/lope.png"
                alt="lock"
                width={12.52}
                height={14.53}
                className="absolute top-[42px] left-4"
                />
            </div>
        </div>

    </div>
  )
}

export default Inputs
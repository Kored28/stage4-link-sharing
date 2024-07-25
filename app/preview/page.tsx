import LinkCard from '@components/preview/LinkCard'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col">
        <div className="flex bg-none sm:bg-[#633CFF] p-[24px]">
            <div className="flex justify-between w-full py-[16px] pr-[16px] pl-[24px] gap-2
            bg-white rounded-xl" 
            >
                <Link
                href="/"
                className="py-[11px] px-[27px] 
                border border-[#633CFF] text-[#633CFF] font-semibold
                rounded-lg"
                >
                    Back to Editor
                </Link>
                <Link
                href=""
                className="py-[11px] px-[27px] 
                bg-[#633CFF] text-white font-semibold
                rounded-lg"
                >
                    Share Link
                </Link>
            </div>
        </div>

        <div className="flex bg-none sm:bg-[#633CFF] sm:h-[200px]
        rounded-b-[32px] relative h-0
        "
        >
            
        </div>

        <div className="flex items-center justify-center relative sm:absolute
         sm:left-[50%] sm:right-[50%] sm:top-[34%] 
         left-0 right-0 top-0"
        >
            <div 
            className="flex flex-col justify-center items-center bg-white gap-[56px]
            w-[349px] py-[48px] px-[56px] rounded-3xl shadow-0 sm:shadow-md mb-[50px]
            "
            >
                <div className="flex flex-col justify-center items-center gap-[24px]
                "
                >
                    <div className="flex rounded-full">
                        <Image 
                        src="/assets/images/pic.png"
                        alt=""
                        width={104}
                        height={104}
                        />
                    </div>

                    <div className="flex flex-col">
                        <h1 className="text-[32px] text-[#333333] font-bold">
                            Ben Wright
                        </h1>

                        <p className="text-[16px] text-[#888888] font-normal text-center">
                            ben@example.com
                        </p>
                    </div>
                </div>

                <div className="flex flex-col gap-[20px]">
                    <LinkCard/>
                    <LinkCard/>
                    <LinkCard/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default page
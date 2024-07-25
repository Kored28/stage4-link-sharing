"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex p-0 lg:p-[24px] bg-white
    lg:bg-ground-grey1"
    >
        <div className="flex justify-between w-full bg-white py-[16px] pl-[24px] pr-[16px] rounded-xl">
            <div 
            className="flex sm:hidden w-[52px]">
                <Image 
                src="/assets/logo.svg"
                alt="Devlnks logo"
                width={32}
                height={32}
                />
            </div>

            <div 
            className="hidden sm:flex">
                <Image 
                src="/assets/logo-full.svg"
                alt="Devlnks logo"
                width={146}
                height={32}
                />
            </div>

            <div className="flex items-center">        
                <Link 
                href="/"
                className="flex gap-0 sm:gap-2 bg-[#EFEBFF] py-[11px] px-[27px] rounded-lg
                ">
                    <Image 
                    src="/assets/link-purple.png"
                    alt="link"
                    width={20}
                    height={20}
                    className="object-contain"
                    />
                    <p className="text-[16px] text-[#633CFF] font-semibold hidden sm:block">
                        Links
                    </p>
                </Link>
                <Link 
                href="/profile"
                className="flex gap-0 sm:gap-2 py-[11px] px-[27px]  rounded-lg
                ">
                    <Image 
                    src="/assets/user-circle.png"
                    alt="profile"
                    width={20}
                    height={20}
                    className="object-contain"
                    />
                    <p className="text-[16px] text-[#737373] font-semibold hidden sm:block">
                        Profile Details
                    </p>
                </Link>
            </div>

            <Link 
            href="/preview"
            className="flex py-[11px] px-[16px] sm:px-[27px] border border-[#633CFF] rounded-lg 
            ">
                <Image 
                src="/assets/purple-eye.png"
                alt="publish"
                width={20}
                height={20}
                className="object-contain flex sm:hidden"
                />
                <p className="text-[16px] text-[#633CFF] font-semibold hidden sm:block">
                    Preview
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Navbar
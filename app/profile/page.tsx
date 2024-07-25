"use client"

import EmptyCard from '@components/empty/EmptyCard'
import Navbar from '@components/Navbar'
import ProfileInputs from '@components/profile/ProfileInputs'
import Image from 'next/image'
import Link from 'next/link'
import { useRef, ChangeEvent, MouseEvent, useState } from 'react';

const Profile: React.FC = () => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [first, setFirst] = useState("")
    const [last, setLast] = useState("")
    const [email, setEmail] = useState("")

    const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files?.[0];
      if (file) {
        console.log('File selected:', file);
        // Process the file (e.g., upload to server)
      }
    };
  
    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    const handleProfile = () => {
        if(last && email && last){
            <p>Please fill the fields</p>
        }
    }
  return (
    <div>
        <Navbar />
        <div className="flex flex-col lg:flex-row gap-[24px] p-[16px] lg:p-[0px_24px_24px_24px] bg-ground-grey1 w-full">
        

            <div className="hidden lg:flex w-[40%] bg-white items-center justify-center ">
                <div className="flex flex-col relative items-center justify-center h-screen ">
                    <Image
                    src="/assets/images/outer.png"
                    alt=""
                    width={307} 
                    height={631}
                    />
                    <Image
                    src="/assets/images/inner.png"
                    alt=""
                    width={285} 
                    height={611}
                    className="absolute z-10"
                    />
                    
                    <div className="flex flex-col gap-[56px] absolute z-20 items-center justify-center h-screen">

                    <div className="flex flex-col justify-center items-center gap-[24px]
                        "
                    >
                        <div className="flex rounded-full 
                        bg-[#EEEEEE] w-[104px] h-[104px]"
                        >                  
                        </div>

                        <div className="flex flex-col gap-[13px] justify-center items-center">
                            <h1 className="text-[32px] bg-[#EEEEEE] font-bold w-[160px] h-[16px]
                            rounded-[104px]">
                            </h1>

                            <p className="text-[16px] bg-[#EEEEEE] font-normal text-center w-[72px] h-[8px]
                            rounded-[104px]">
                            </p>
                        </div>
                        
                    </div>

                    <div className="flex flex-col gap-[20px]">
                        <EmptyCard/>
                        <EmptyCard/>
                        <EmptyCard/>
                        <EmptyCard/>
                        <EmptyCard/>
                    </div>

                    </div>

                </div>
            </div>
        


            <div className="flex flex-col gap-[24px] bg-white
            w-full lg:w-[60%]  rounded-xl"
            >
                <div className="flex flex-col m-[20px] sm:m-[40px]
                gap-[24px] "
                >
                    <div className="flex flex-col gap-[8px]">
                        <h1 className="m-heading">
                        Profile Details
                        </h1>

                        <p className="m-desc font-bold">
                        Add your details to create a personal touch to your profile.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row p-[20px] 
                    gap-[12px] sm:gap-[16px] bg-ground-grey1 rounded-xl
                    justify-start sm:justify-between"
                    >
                        <p className="m-desc flex items-start sm:items-center justify-start
                        sm:justify-center"
                        >
                            Profile picture
                        </p>

                        <div className="flex flex-col sm:flex-row gap-[24px]">
                            <div className="flex flex-col justify-center items-center w-[193px] h-[193px]
                            bg-[#EFEBFF] rounded-lg"
                            >
                                <Image 
                                src="/assets/images/upload.png"
                                alt="Upload images"
                                width={40}
                                height={40}
                                className="object-contain"
                                />
                                <div>
                                    <Link href="#" onClick={handleClick} 
                                    className="text-[16px] font-semibold text-[#633CFF]">
                                        + Upload Image
                                    </Link>
                                    <input
                                        type="file"
                                        ref={fileInputRef}
                                        onChange={handleFileUpload}
                                        className="hidden"
                                    />
                                </div>
                                
                            </div>

                            <p className="text-[12px] w-full font-normal text-[#737373]
                            sm:w-[127px] flex items-start sm:items-center justify-start
                            sm:justify-center"
                            >
                                Image must be below 1024x1024px. Use PNG or JPG format.
                            </p>
                        </div>

                    </div>

                    <ProfileInputs
                     first={first}
                     last={last}
                     email={email}
                     setFirst={setFirst}
                     setLast={setLast}
                     setEmail={setEmail}
                    />
                </div>

                <div className="border-b-[1px] border-b-[#D9D9D9] mx-0 sm:mx-[40px]
                " />

                <div className="flex justify-end mx-[20px] sm:mx-[40px]">
                    <button 
                        className="text-white text-[16px] font-semibold bg-[#633CFF]
                        rounded-lg py-[11px] px-[27px] disabled:opacity-[0.4]
                        w-full sm:w-[91px] disabled:cursor-pointer"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile


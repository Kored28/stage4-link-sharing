"use client"
import EmptyCard from "@components/empty/EmptyCard"
import Form from "@components/empty/Form"
import Navbar from "@components/Navbar"
import Image from "next/image"
import { useState } from "react"

const page = () => {
  const [addNew, setAddNew] = useState<Boolean>(false)
  return (
    <div>
      <Navbar />
      
      <div className="flex w-full bg-white lg:bg-ground-grey1 p-0 lg:p-[0px_24px_24px_24px]
      gap-[24px]"
      >

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


        <div className="flex flex-col gap-[24px] w-full lg:w-[60%]
        bg-none lg:bg-white rounded-xl"
        > 

          <div className="flex flex-col m-0 sm:m-[40px_40px_20px_40px] p-[24px] sm:p-0 gap-[40px]">

            <div className="flex flex-col gap-[8px]">
              <h1 className="m-heading">
                Customize your links
              </h1>

              <p className="m-desc font-bold">
                Add/edit/remove links below and 
                then share all your profiles 
                with the world!
              </p>
            </div>

            <Form addNew={addNew} setAddNew={setAddNew} />

          </div>

          <div className="border-b-[1px] border-b-[#D9D9D9] mx-0
          " />

          <div className="flex justify-end mx-[20] sm:mx-[40px]">
            <button 
              className="text-white text-[16px] font-semibold bg-[#633CFF]
              rounded-lg py-[11px] px-[27px] disabled:opacity-[0.4]
              w-full sm:w-[91px] disabled:cursor-pointer "
              disabled={addNew === false}
            >
              Save
            </button>
          </div>

      </div>
      </div>

    </div>
  )
}

export default page
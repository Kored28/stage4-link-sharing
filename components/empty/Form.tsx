"use client"
import Image from "next/image"
import { Dispatch, SetStateAction, useState } from "react"
import Inputs from "./Inputs"

interface FormProps {
    addNew: Boolean;
    setAddNew: Dispatch<SetStateAction<Boolean>>;
}


const Form: React.FC<FormProps> = ({addNew, setAddNew}) => {

  return (
    <div className="flex flex-col">
        <div className="flex flex-col gap-[40px] lg:gap-[24px]"
        >
            <button 
            className="text-[#633CFF] text-[16px] font-semibold border border-[#633CFF]
            rounded-lg py-[11px] px-[27px]
            "
            onClick={() => setAddNew((prev) => !prev)}
            >
                + Add new link
            </button>

            {addNew ? (
                <Inputs />
            ): (
                <div className="flex flex-col items-center justify-center p-[20px] gap-[12px]
                bg-[#FAFAFA] rounded-xl h-[377px] sm:h-[509px] lg:h-[]
                ">
                    <div className="flex flex-col items-center justify-center gap-[24px]
                    w-[255px] sm:w-[590px] lg:w-[688px] text-center">

                        <Image 
                        src="/assets/images/handbook.png"
                        alt=""
                        width={124.77}
                        height={80}
                        className="object-contain flex sm:hidden"
                        />

                        <Image 
                        src="/assets/images/handbook-md.png"
                        alt=""
                        width={249.54}
                        height={160}
                        className="hidden sm:flex"
                        />


                        <h1 className="m-heading">
                            Let’s get you started
                        </h1>

                        <p className="m-desc w-[450px]">
                            Use the “Add new link” button to get started. 
                            Once you have more than one link, you can reorder and edit them. 
                            We’re here to help you share your profiles with everyone!
                        </p>
                    </div>

                </div>
            )}

            
        </div>
    </div>
  )
}

export default Form
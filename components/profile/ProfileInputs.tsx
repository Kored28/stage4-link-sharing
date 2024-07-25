import React, { Dispatch, SetStateAction } from 'react'

interface FormProps {
    first: string;
    last: string;
    email: string;
    setFirst: Dispatch<SetStateAction<string>>;
    setLast: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
}

const ProfileInputs:React.FC<FormProps> = ({first, last, email, setFirst, setLast, setEmail}) => {
  return (
    <div className="flex flex-col p-[20px] gap-[12px] bg-ground-grey1
    rounded-xl"
    >
        <div className="flex flex-col sm:flex-row gap-[4px] justify-start sm:justify-between
        "
        >
            <label htmlFor="firstname" 
            className="text-[#333333] sm:text-[#737373] text-[12px] sm:text-[16px]
            "
            >
                First name*
            </label>
            <input 
            type="text"
            id="firstname"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            placeholder="First name"
            className="border border-[#D9D9D9] w-full sm:w-[344px] h-[48px]
            relative py-[12px] px-[12px] text-[16px] text-[#333333] 
            rounded-lg outline-none"
            />
        </div>

        <div className="flex flex-col sm:flex-row gap-[4px] justify-start sm:justify-between
        "
        >
            <label htmlFor="password" 
            className="text-[#333333] sm:text-[#737373] text-[12px] sm:text-[16px]
            "
            >
                Last name*
            </label>
            <input 
            type="text"
            id="password"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            placeholder="Last name"
            className="border border-[#D9D9D9] w-full sm:w-[344px] h-[48px]
            relative py-[12px] px-[12px] text-[16px] text-[#333333] 
            rounded-lg outline-none"
            />
        </div>

        <div className="flex flex-col sm:flex-row gap-[4px] justify-start sm:justify-between
        "
        >
            <label htmlFor="email" 
            className="text-[#333333] sm:text-[#737373] text-[12px] sm:text-[16px]
            "
            >
                Email
            </label>
            <input 
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="border border-[#D9D9D9] w-full sm:w-[344px] h-[48px]
            relative py-[12px] px-[12px] text-[16px] text-[#333333] 
            rounded-lg outline-none"
            />
        </div>
        
    </div>
  )
}

export default ProfileInputs
import Image from 'next/image'
import Link from 'next/link'

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center p-[30px] w-full bg-white
    sm:bg-[#FAFAFA]">
        <div className="flex mb-[60px]">
            <Image 
            src="/assets/logo-full.svg"
            alt="Devlinks logo"
            width={182.5}
            height={40}
            />
        </div>

        <div className="flex flex-col p-0 gap-[40px] bg-none w-full td-login-card">
            <div className="flex flex-col gap-[8px]"
            >
                <h1 className="m-heading">
                    Create Account
                </h1>
                <p className="text-[16px] text-[#737373] font-normal">
                    Let’s get you started sharing your links!
                </p>
            </div>

            <div className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[4px] relative">
                    <label htmlFor="email" 
                    className="text-[#333333] text-[12px]"
                    >
                        Email address
                    </label>
                    <input 
                    type="text"
                    id="email"
                    placeholder="e.g. alex@email.com"
                    className="border border-[#D9D9D9] outline-none w-full h-[48px]
                    relative py-[12px] pr-[12px] pl-[38px] text-[16px] text-[#333333] 
                    rounded-lg 
                   " 
                    />
                    <Image
                    src="/assets/lope.png"
                    alt="lock"
                    width={13}
                    height={10}
                    className="absolute top-[42px] left-4"
                    />
                </div>

                <div className="flex flex-col gap-[4px] relative">
                    <label htmlFor="createPassword" className="text-[#333333] text-[12px]"
                    >
                        Create password
                    </label>
                    <input 
                    type="text"
                    id="CreatePassword"
                    placeholder="At least .8 characters"
                    className="border border-[#D9D9D9] outline-none w-full h-[48px]
                    relative py-[12px] pr-[12px] pl-[38px] text-[16px] text-[#333333] 
                    rounded-lg
                    "
                    />
                    <Image
                    src="/assets/lock.png"
                    alt="lock"
                    width={13}
                    height={10}
                    className="absolute top-[40px] left-4"
                    />
                </div>

                <div className="flex flex-col gap-[4px] relative">
                    <label htmlFor="password" className="text-[#333333] text-[12px]"
                    >
                        Confirm password
                    </label>
                    <input 
                    type="text"
                    id="ConfirmPassword"
                    placeholder="At least .8 characters"
                    className="border border-[#D9D9D9] outline-none w-full h-[48px]
                    relative py-[12px] pr-[12px] pl-[38px] text-[16px] text-[#333333] 
                    rounded-lg
                    "
                    />
                    <Image
                    src="/assets/lock.png"
                    alt="lock"
                    width={13}
                    height={10}
                    className="absolute top-[40px] left-4"
                    />
                </div>

                <p className="text-[12px] text-[#737373] font-normal">
                    Password must contain at least 8 characters
                </p>

                <button
                className="bg-[#633CFF] py-[11px] px-[27px] rounded-lg text-[16px]
                text-white font-semibold w-full"
                >
                    Create new account
                </button>

                <div className="flex items-center justify-center text-center">
                    <p className="text-[16px] text-[#737373] font-normal">
                        Already have an account? &nbsp;
                        <br className="flex sm:hidden" />
                        <Link href="/signup" className="text-[#633CFF]">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SignUp
import Image from "next/image"
import Link from "next/link"

const Login = () => {
  return (
    <div className="flex flex-col p-[30px] w-full bg-white
    sm:bg-[#FAFAFA]">
        <div className="flex items-start justify-start mb-[60px] sm:items-center sm:justify-center">
            <Image 
            src="/assets/logo-full.svg"
            alt="Devlinks logo"
            width={182.5}
            height={40}
            />
        </div>

        <div className="flex items-center justify-center">
                <div className="flex flex-col p-0 gap-[40px] bg-none w-full td-login-card">
                    <div className="flex flex-col gap-[8px]"
                    >
                        <h1 className="m-heading">
                            Login
                        </h1>
                        <p className="text-[16px] text-[#737373] font-normal">
                            Add your details below to get back into the app
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
                            className="border border-[#D9D9D9] w-full h-[48px]
                            relative py-[12px] pr-[12px] pl-[38px] text-[16px] text-[#333333] 
                            rounded-lg outline-none"
                            />
                            <Image
                            src="/assets/lope.png"
                            alt="lock"
                            width={12}
                            height={13.5}
                            className="absolute top-[42px] left-4"
                            />
                        </div>

                        <div className="flex flex-col gap-[4px] relative">
                            <label htmlFor="password" className="text-[#333333] text-[12px]"
                            >
                                Password
                            </label>
                            <input 
                            type="text"
                            id="password"
                            placeholder="Enter your password"
                            className="border border-[#D9D9D9] w-full h-[48px]
                            relative py-[12px] pr-[12px] pl-[38px] text-[16px] text-[#333333] 
                            rounded-lg outline-none"
                            />
                            <Image
                            src="/assets/lock.png"
                            alt="lock"
                            width={12}
                            height={13.5}
                            className="absolute top-[40px] left-4"
                            />
                        </div>

                        <button
                        className="bg-[#633CFF] py-[11px] px-[27px] rounded-lg text-[16px]
                        text-white font-semibold w-full"
                        >
                            Login
                        </button>

                        <div className="flex items-center justify-center text-center">
                            <p className="text-[16px] text-[#737373] font-normal">
                                Don’t have an account? &nbsp;
                                <br className="flex sm:hidden" />
                                <Link href="/signup" className="text-[#633CFF]">
                                    Create account
                                </Link>
                            </p>
                        </div>
                    </div>
                    
                </div>
        </div>
    </div>
  )
}

export default Login
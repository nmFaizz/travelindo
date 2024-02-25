"use client"
import Link from "next/link"
import { FiMenu } from "react-icons/fi";
import { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import Logo from "../logo/Logo";

export default function NavigationBar() {
    const navs: string[] = ['Home', 'Tour Package', 'Promos', 'Services', 'About Us']

    const [isMenu, setIsMenu] = useState(false)

    return (
        <header className="flex justify-between w-full px-4 md:px-16 h-16 md:h-24 items-center sticky top-0 left-0 z-50 bg-white-primary">
            <div>
                <Logo />
            </div>

            <nav className="hidden lg:block">
                {navs.map(nav => <Link href='/' key={nav} className="px-5 hover:underline font-[500] text-sm">{nav}</Link>)}
            </nav>  

            <button className="bg-orange-primary px-5 py-3 hidden lg:block">
                <p className="text-white-primary tracking-[var(--spacing-wide)] font-[600] text-[12px]">SIGN UP</p>
            </button>

            <div className="block lg:hidden relative">
                <div className={`text-2xl md:text-3xl text-black-primary`} onClick={() => setIsMenu(prev => !prev )}>
                    {isMenu ? <IoCloseOutline/> : <FiMenu />}
                    
                </div>
            
                <div className={`${isMenu ? 'block' : 'hidden'} text-black-primary bg-white-primary w-[150px] absolute right-0 flex flex-col items-center rounded-md pb-5 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]`}>
                    <nav className="flex flex-col py-5 h-[240px] justify-evenly">
                        {navs.map(nav => <Link href='/' key={nav} className="px-5 hover:underline font-[500] text-sm">{nav}</Link>)}
                    </nav> 

                    <button className="bg-[var(--red-primary)] px-2 py-1">
                        <p className="text-white-primary tracking-[var(--spacing-wide)] font-[600] text-[12px]">SIGN UP</p>
                    </button>
                </div>

            </div>

        </header>
    )
}
import Link from "next/link"
import Logo from "../logo/Logo"
import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa"
import { IoMailOutline } from "react-icons/io5";


export default function Footer() {
    type LinksData = {
        title: string,
        links: string[]
    }

    const linksData: LinksData[] = [
        {
            title: 'Company',
            links: [
                'Home',
                'About',
                'Career History',
                'Sponsored',
                'Team'
            ]            
        },
        {
            title: 'Categories',
            links: [
                'Family',
                'Honey Moon',
                'Exclusive Trip',
                'Group',
                'Backpacker'
            ]            
        },
        {
            title: 'Resources',
            links: [
                'Report',
                'Term and Condition',
                'Privacy Policy',
            ]            
        }
    ]

    return (
        <footer className="bg-black-primary text-white-primary py-12 px-8 sm:px-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-16 text-[12px] sm:text-[1rem]">
            <div>
                <div className="mb-8">
                    <Logo />
                </div>

                <div className="">
                    <p className="mb-5">Are you interested ? or Any question about our product</p>
                    <p className="">Call us anytime at</p>
                    <p className="text-[var(--red-primary)] mb-12">(702) 553-0122</p>
                </div>

                <div className="border-t-[1px] py-5">
                    <div className="flex gap-5 justify-center">
                        <div className="border-[1px] p-2 rounded-full text-[0.8rem] sm:text-[1.2rem]">
                            <FaInstagram />
                        </div>

                        <div className="border-[1px] p-2 rounded-full text-[0.8rem] sm:text-[1.2rem]">
                            <FaTwitter />
                        </div>
                        
                        <div className="border-[1px] p-2 rounded-full text-[0.8rem] sm:text-[1.2rem]">
                            <FaFacebook />
                        </div>
                    </div>
                </div>
            </div>

            {linksData.map((data: LinksData) =>
                <div key={data.title}>
                    <h2 className="font-[700] mb-5">{data.title}</h2>
                    <div className="flex flex-col gap-2">
                        {data.links.map((link: string) => 
                            <Link href='/' key={link} className="hover:underline">{link}</Link>
                        )}
                        
                    </div>
                </div>
            )}

            <div>
                <h2 className="font-[700] mb-5">Subscription</h2>

                <div className="flex w-full">
                    <input 
                        type="text" 
                        className="w-full outline-none text-black-primary px-2 text-[12px]" 
                        placeholder="Enter your E-Mail here.."
                    />
                    <button className="bg-orange-primary p-1">
                            <IoMailOutline className="text-2xl" />
                    </button>
                </div>

                <div className="mt-5 text-[12px] text-stone-400">
                    <p>Be the first to got special offers from us</p>
                </div>
            </div>
        </footer>
    )
}
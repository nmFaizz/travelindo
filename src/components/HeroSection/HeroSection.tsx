import Image from "next/image"
import { IoSearch } from "react-icons/io5";
import DestinationCarousel from "../destinationCarousel/DestinationCarousel";
import type { Images } from "@/utils";

export default function HeroSection() {


    const images: Images[] = [
        {
            id: 1,
            img: '/hero-1.avif',
            imgAlt: 'water-fall'
        },
        {
            id: 2,
            img: '/hero-2.avif',
            imgAlt: 'stone-forest'
        },
        {
            id: 3,
            img: '/hero-3.avif',
            imgAlt: 'city-building'
        },
        {
            id: 4,
            img: '/hero-4.jpg',
            imgAlt: 'stone-beach'
        },
        {
            id: 5,
            img: '/hero-5.jpg',
            imgAlt: 'tokyo'
        },
    ]

    return (
        <div className={`flex flex-col md:flex-row items-center w-full lg:pl-32 sm:pl-12 py-12 gap-12 md:h-[80vh] h-auto`}>
            <div className="w-full sm:pr-12 pr-4 md:w-[650px] flex items-center flex-col md:block px-4 md:px-0">
                <div className="">
                    <h1 className="font-[700] text-[2.4rem] text-center md:text-start">Discover</h1>
                    <h1 className="font-[700] text-[2.4rem] text-center md:text-start">Your Best Trip!</h1>
                </div>

                <div className="border-[1px] border-gray-300 flex mt-16 p-1 w-full">
                    <input type="text" placeholder="Search country, city, or destination" className="w-full px-4 text-sm outline-none" />
                    <button className="tracking-[var(--spacing-wide)] bg-orange-primary text-white-primary py-3 px-5 text-[12px]">
                        <p className="hidden md:block">SEARCH</p>
                        <IoSearch className="block md:hidden text-xl"/>
                    </button>
                </div>


                <section className="mt-16 max-w-[420px]">
                    <p className="font-[500] text-[14px] md:text-[1rem] text-center md:text-start">Much beautiful and refreshing places as you need to satisfy your best trip and make an amazing experience. Go explore our packages</p>
                </section>

                <button className="mt-8 tracking-[var(--spacing-wide)] bg-orange-primary text-white-primary py-3 px-5 text-[12px]">
                    EXPLORE PACKAGES
                </button>
            </div>


            <div className=" h-full flex gap-5 overflow-x-scroll no-scrollbar pl-4 md:pl-0 w-full">
                <DestinationCarousel images={images} />
            </div>

        </div>
    )
}
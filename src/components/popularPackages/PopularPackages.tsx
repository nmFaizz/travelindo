import Image from "next/image"
import PopularList from "./popularList/PopularList"
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

export type Popular = {
    id: number,
    img: string,
    imgAlt: string,
    placeName: string,
    price: number,
    perDay: number,
    guests: number
}

export default function PopularPackages() {

    const popular: Popular[] = [
        {
            id: 1,
            img: '/labuan-bajo.jpg',
            imgAlt: 'labuan bajo',
            placeName: 'Labuan Bajo',
            price: 1100, 
            perDay: 3,
            guests: 3
        },
        {
            id: 2,
            img: '/nihi-sumba.jpg',
            imgAlt: 'nihi sumba',
            placeName: 'Nihi Sumba',
            price: 2500, 
            perDay: 3,
            guests: 4
        },
        {
            id: 3,
            img: '/pink-beach.jpg',
            imgAlt: 'pink beach',
            placeName: 'Pink Beach',
            price: 580, 
            perDay: 1,
            guests: 3
        },
        {
            id: 4,
            img: '/seribu-island.jpg',
            imgAlt: 'Pulau Seribu',
            placeName: 'Seribu Island',
            price: 380, 
            perDay: 1,
            guests: 4
        },
        {
            id: 5,
            img: '/niagara-falls.jpg',
            imgAlt: 'niagara falls',
            placeName: 'Niagara Falls',
            price: 880, 
            perDay: 1,
            guests: 5
        },
    ]

    return (
        <div className="lg:pl-32 sm:pl-12 pl-4 py-24">
            <div className="pb-16 pr-4 sm:pr-12 md:pr-32">
                <p className="tracking-[var(--spacing-wide)] text-[10px] md:text-[12px]">CHOOSE WHERE TO GO</p>

                <div className="flex justify-between">
                    <h1 className="font-[800] text-xl md:text-3xl mt-2">Popular packages</h1>
                    <div className="flex text-[13px] md:text-[1.1rem] gap-3">
                        <div className="rounded-full hover:bg-orange-primary hover:text-white-primary cursor-pointer md:w-12 md:h-12 w-10 h-10 flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                            <BiSolidLeftArrow className="" />
                        </div>

                        <div className="rounded-full hover:bg-orange-primary hover:text-white-primary cursor-pointer w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                            <BiSolidRightArrow className="" />
                        </div>   
                    </div>
                </div>
            </div>

            <PopularList popular={popular}/>
        </div>
    )
}
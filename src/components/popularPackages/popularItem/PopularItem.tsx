import type { Popular } from "../PopularPackages";
import Image from "next/image";

export default function PopularItem({ placeName, price, perDay, guests, img, imgAlt }: Popular) {
    return (
        <div className="h-[19rem] md:h-[28rem] bg-black w-[15rem]  md:w-[25rem] flex-shrink-0 text-[var(--white-primary)] relative">
            <Image
                src={img}
                alt={imgAlt}
                width={560}
                height={540}
                className="w-full h-full bg-cover"
            />

            <div className="h-full w-full absolute top-0 left-0 backdrop-brightness-75">
                <div className="absolute bottom-0 left-0 w-full md:p-8 p-4">
                    <h2 className="mb-4 md:mb-8 md:text-xl font-[600] text-md">{placeName}</h2>

                    <div className="flex justify-between flex-col md:flex-row">
                        <div className="">
                            <p className="text-md md:text-2xl mb-3">${price}<span className="text-sm"> / {perDay} {perDay > 1 ? 'days' : 'day'} </span></p>
                            <p className="text-[10px] md:text-sm">For {guests} {guests > 1 ? 'Guests' : 'Guest'}</p>
                        </div>

                        <button className="w-fit text-[12px] md:text-[1rem] px-2 md:px-4 py-2 mt-4 hover:bg-[var(--red-primary)] hover:border-none border-[1px] tracking-[var(--spacing-wide)] font-[600]">
                            BOOK NOW 
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
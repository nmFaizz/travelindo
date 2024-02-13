import Image from "next/image"
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function Testimonials() {
    return (
        <div className="mt-32 flex lg:px-32 sm:px-12 px-4">
            <div className="p-4">
                <section>
                    <p>&quot;The waves getting here are pretty awesome. The road acces is still narrow, but a lot of hidden paradise here. The beach is beautiful, the water is blue with lots of cliffs. The underwater spots are also very beautiful, there are various types of fish, the coral reef&apos;s are still colorful.&quot;</p>
                </section>

                <div className="flex justify-between">
                    <div>
                        <h1>Antasania Emily</h1>
                        <p>Sanfransisco, California</p>
                    </div>

                    <div className="flex gap-2">
                        <div className="rounded-full hover:bg-[var(--red-primary)] md:w-12 md:h-12 w-10 h-10 flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                            <BiSolidLeftArrow className="" />
                        </div>

                        <div className="rounded-full hover:bg-[var(--red-primary)]  w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]">
                            <BiSolidRightArrow className="" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-black w-[1250px] h-[420px]">
                
            </div>
        </div>
    )
}


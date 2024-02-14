import Image from "next/image"
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

export default function Testimonials() {

    return (
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start mx-2 sm:mx-12 lg:mx-24 mt-24">
            <div className="p-4 md:flex-1 max-w-[800px]">
                <div className="flex-1 md:flex flex-col justify-between hidden">
                    <div className="">
                        <p className="tracking-[var(--spacing-wide)] text-[12px]">TESTIMONIALS</p>
                        <h1 className="mt-2 font-[800] text-[2rem] max-w-[500px]">Best Trip Ever With Travelindo, I Wanna Go Back!</h1>
                    </div>
                    <div className=" mt-12">
                        <p className="font-[600]">Kelingking Beach Package</p>
                        <p>Nusa Penida, Bali</p>
                    </div>
                </div>

                <section className="bg-stone-100 p-4 mt-8 text-[12px] md:text-[1rem]">
                    <p className="">&quot;The waves getting here are pretty awesome. The road acces is still narrow, but a lot of hidden paradise here. The beach is beautiful, the water is blue with lots of cliffs. The underwater spots are also very beautiful, there are various types of fish, the coral reef&apos;s are still colorful.&quot;</p>
                </section>

                <div className="flex justify-between mt-12">
                    <div>
                        <h1 className="font-[800] text-[12px] md:text-[1rem]">Antasania Emily</h1>
                        <p className="mt-2 text-[12px] md:text-[1rem]">Sanfransisco, California</p>
                    </div>

                    <div className="flex gap-2">
                        <div className="md:border-[1px] hover:cursor-pointer bg-stone-100 hover:text-[var(--white-primary)] md:bg-none md:rounded-full hover:bg-[var(--red-primary)] md:w-12 md:h-12 w-10 h-10 flex items-center justify-center">
                            <BiSolidLeftArrow className="text-[12px] md:text-[1rem]" />
                        </div>

                        <div className="md:border-[1px] hover:cursor-pointer bg-stone-100 hover:text-[var(--white-primary)] md:rounded-full hover:bg-[var(--red-primary)]  w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                            <BiSolidRightArrow className="text-[12px] md:text-[1rem]" />
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex px-4 gap-4">
                <div className="bg-black flex-1 h-[200px] max-w-[110px] md:max-w-none md:w-[320px] lg:w-[560px] md:h-[630px]">
                    <Image 
                        src='/testimonial.jpg'
                        width={560}
                        height={650}
                        alt="testimonial"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-1 flex flex-col justify-between md:hidden">
                    <div>
                        <p className="tracking-[var(--spacing-wide)] text-[10px]">TESTIMONIALS</p>
                        <h1 className="mt-2 font-[800] text-[1.2rem]">Best Trip Ever With Travelindo, I Wanna Go Back!</h1>
                    </div>
                    <div className="">
                        <p className="font-[600] text-[11px]">Kelingking Beach Package</p>
                        <p className="text-[10px]">Nusa Penida, Bali</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


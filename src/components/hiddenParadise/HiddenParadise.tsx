import DestinationCarousel from "../destinationCarousel/DestinationCarousel"
import type { Images } from "@/utils"

export default function HiddenParadise() {
    const images: Images[] = [
        {
            id: 1,
            img: '/bali-1.jpg',
            imgAlt: 'bali',
        },
        {
            id: 2,
            img: '/bali-2.jpg',
            imgAlt: 'bali',
        },
        {
            id: 3,
            img: '/bali-3.jpg',
            imgAlt: 'bali',
        },
        {
            id: 4,
            img: '/bali-4.jpg',
            imgAlt: 'bali',
        },
        {
            id: 5,
            img: '/bali-5.jpg',
            imgAlt: 'bali',
        },
    ] 


    return (
        <div className="ml-4 sm:ml-12 lg:ml-32 mt-24">
            <div className="mb-12">
                <p className="tracking-[var(--spacing-wide)] text-[10px] md:text-[12px]">HIDDEN PARADISE</p>
                <h1 className="font-[800] text-xl md:text-3xl mt-2">Bali, Indonesia</h1>
            </div>

            <section className="mr-4 sm:mr-12 lg:mr-32">
                <p className="max-w-[900px]">Bali island is a province of Indonesia and the westernmost of the lesser Sunda islands. Bali is Indonesia&apos;s main tourist destination. it is renewed for its highly developed arts, including traditional and modern dance, sculpture, painting, leather, metalworking, and music.</p>
            </section>

            <div className="flex gap-5 h-auto md:h-[450px] mt-12 overflow-x-scroll no-scrollbar">
                <DestinationCarousel images={images} />
            </div>

            <div className="flex justify-center text-[var(--white-primary)] mt-12 mr-4 sm:mr-12 lg:mr-32">
                <button className="bg-[var(--red-primary)] px-4 py-2 tracking-[var(--spacing-wide)]">
                    EXPLORE BALI
                </button>
            </div>
        </div>
    )
}
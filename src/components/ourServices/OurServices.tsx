import Image from "next/image"
import ServicesList from "./servicesList/ServicesList"

export type Services = {
    id: number,
    heading: string,
    body: string
}

export default function OurServices() {
    const services: Services[] = [
        {
            id: 1,
            heading: 'Tour Guide',
            body: 'We provide our best tour guides wich has a lot of information and direct you very well'
        },
        {
            id: 2,
            heading: 'Private Transport',
            body: 'We provide the private vehichles such as car, motobike according to your choice and convenience'
        },
        {
            id: 3,
            heading: 'Special Access',
            body: 'The special offers of our services you can get special private acces in some of destinations'
        },
        {
            id: 4,
            heading: '24 Hours Crews',
            body: 'Anytime you need us, we are ready in 24 hours in everyday. You can call us or visit our office centre'
        },

    ]


    return (
        <div className="lg:px-32 sm:px-12 px-4">
            <div>
                <p className="text-[10px] md:text-[12px] tracking-[var(--spacing-wide)]">SPECIAL FOR YOU</p>
                <h1 className="font-[800] text-xl md:text-3xl mt-2 mb-12">Our Services</h1>
            </div>

            <div className="flex gap-8 flex-col md:flex-row items-center md:items-start">
                <div className="w-full h-[140px] md:w-[550px] md:h-[600px]">
                    <Image 
                        src='/jeep.jpg'
                        width={550}
                        height={600}
                        alt="jeep"
                        className="w-full h-full object-cover"
                    />

                    
                </div>

                <ServicesList services={services} />
            </div>

            <div className="flex justify-center md:justify-normal ">
                <button className=" bg-[var(--red-primary)] text-[var(--white-primary)] py-2 px-4 mt-12 tracking-[var(--spacing-wide)]">
                    SEE ALL
                </button>
            </div>
        </div>
    )
}
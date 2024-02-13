import type { Images } from "@/utils"
import Image from "next/image"

export default function DestinationCarousel(props: {images: Images[]}) {
    const { images } = props

    return (
        <>
            {images.map((item: Images) => 
                <div key={item.id} className="h-[180px] w-[120px] md:h-full md:w-[25rem] bg-black flex-shrink-0">
                    <Image 
                        src={item.img}
                        width={520}
                        height={720}
                        alt={item.imgAlt}
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                        priority
                    />
                </div>
            )}
        </>
    )
}


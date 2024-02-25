import type { Images } from "@/utils"
import Image from "next/image"
import BlurImage from "../blurImage/BlurImage"

export default function DestinationCarousel(props: {images: Images[]}) {
    const { images } = props

    return (
        <>
            {images.map((item: Images) => 
                <div key={item.id} className="h-[180px] w-[120px] bg-stone-400 md:h-full md:w-[25rem] flex-shrink-0">
                    <BlurImage {...item} />
                </div>
            )}
        </>
    )
}


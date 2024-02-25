"use client"
import Image from "next/image"
import type { Images } from "@/utils"
import { useState } from "react"

export default function BlurImage({ img, imgAlt }: Images) {
    const [onLoad, setOnLoad] = useState(true) 


    return <Image 
                src={img}
                width={520}
                height={720}
                alt={imgAlt}
                className={`${onLoad ? 'blur-md' : 'blur-0'} transition-all ease-linear w-full h-full object-cover`}
                priority
                onLoad={() => setOnLoad(false)}
            />
}
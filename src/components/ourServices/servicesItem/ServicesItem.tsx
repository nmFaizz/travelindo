import type { Services } from "../OurServices"

export default function ServicesItem({ id, heading, body }: Services) {
    return (
        <div className="flex">
            <div className="relative">
                <h1 className="md:text-3xl absolute font-[800]">0{id}</h1>
            </div>

            <div className="md:ml-16 ml-8">
                <h1 className="md:text-2xl font-[600] mb-5">{heading}</h1>
                <p>{body}</p>
            </div>
        </div>
    )
}
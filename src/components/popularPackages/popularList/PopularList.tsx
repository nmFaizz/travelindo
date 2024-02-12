import PopularItem from "../popularItem/PopularItem"
import type { Popular } from "../PopularPackages"

export default function PopularList(props: { popular: Popular[] }) {
    const { popular } = props

    return (
        <div className="flex gap-8 overflow-x-scroll no-scrollbar">
            {popular.map(item => 
                <PopularItem {...item} key={item.id} />
            )}
        </div>
    )
}
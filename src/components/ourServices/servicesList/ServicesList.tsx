import ServicesItem from "../servicesItem/ServicesItem"
import type { Services } from "../OurServices"

export default function ServicesList(props: { services: Services[] }) {
    const { services } = props

    return (
        <div className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-x-1 gap-y-12">
            {services.map(service => 
                <ServicesItem {...service} key={service.id} />    
            )}
            
        </div>
    )
}
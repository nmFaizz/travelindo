export default function WhyChooseUs() {
    type TravelData = {
        id: number,
        value: number,
        dataName: string
    }
    
    const travelData = [
        {
            id: 1,
            value:1500,
            dataName: 'Customers' 
        },
        {
            id: 2,
            value: 700,
            dataName: 'Completed Trips'
        },
        {
            id: 3,
            value: 150,
            dataName: 'Professional Crews'
        },
    ]

    return (
        <div className="justify-center mt-24 mb-24">
            <div>
                <h1 className="font-[800] text-3xl text-center">Why Choose Us?</h1>
            </div>

            <div className="flex flex-col md:flex-row justify-evenly gap-12 py-24">
                {travelData.map((data: TravelData) =>
                    <div key={data.id}>
                        <p className="text-center text-[3.2rem] text-[var(--red-primary)] font-[700]">{data.value}+</p>
                        <p className="text-center">{data.dataName}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

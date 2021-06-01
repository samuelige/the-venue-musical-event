import React from 'react'

const Venue = () => {
    return (
        // <div className="px-4 py-10 lg:px-96 md:py-20"></div>
        <div className="w-full ">
            <div className="flex flex-col lg:flex-row justify-between py-20 lg:py-20 space-y-20 lg:space-y-0">
                <section className="items-center m-auto">
                    <div className="border-0 w-10 bg-red-700 p-8 transform rotate-45 m-auto"></div>
                    <div className="border px-6 py-16 w-56 -m-8 space-y-5 text-center shadow-lg">
                        <h1>Event Date & Time</h1>
                        <hr/>
                        <p>7 August 2017 @10.00pm</p>
                    </div>
                    
                </section>
                <section className="items-center m-auto ">
                    <div className="border-0 w-10 bg-red-700 p-8 transform rotate-45 m-auto"></div>
                    <div className="border px-6 py-16 w-56 -m-8 space-y-5 text-center shadow-lg">
                        <h1>Event Location</h1>
                        <hr/>
                        <p>345 Speer Street Oakland, CA 9835</p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Venue

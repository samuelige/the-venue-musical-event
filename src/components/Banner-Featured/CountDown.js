import React from 'react'

const CountDown = ({ days, hours, minutes, seconds}) => {
    return (
        <div className="border-0 w-64 md:w-72 rounded-lg space-y-3 py-2 px-2 md:px-3 bg-red-700 text-white">
            <h3>EVENT STARTS IN</h3>
            <div className="flex flex-row text-center items-center ">
                <div className="border px-1 py-2 md:px-4 md:py-2">
                    <h1>{days}</h1>
                    <p>DAYS</p>
                </div>
                <div className="border px-4 py-2">
                    <h1>{hours}</h1>
                    <p>HRS</p>
                </div>
                <div className="border px-4 py-2">
                    <h1>{minutes}</h1>
                    <p>MIN</p>
                </div>
                <div className="border px-4 py-2">
                    <h1>{seconds}</h1>
                    <p>SEC</p>
                </div>
            </div>
        </div>
    )
}

export default CountDown

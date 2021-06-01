import React from 'react'

const CountDown = () => {
    return (
        <div className="border-0 w-72 rounded-lg space-y-3 py-2 px-3 animate-bounce bg-red-700 text-white">
            <h3>EVENT STARTS IN</h3>
            <div className="flex flex-row text-center items-center ">
                <div className="border px-4 py-2">
                    <h1>1</h1>
                    <p>DAYS</p>
                </div>
                <div className="border px-4 py-2">
                    <h1>1</h1>
                    <p>HRS</p>
                </div>
                <div className="border px-4 py-2">
                    <h1>4</h1>
                    <p>MIN</p>
                </div>
                <div className="border px-4 py-2">
                    <h1>4</h1>
                    <p>SEC</p>
                </div>
            </div>
        </div>
    )
}

export default CountDown

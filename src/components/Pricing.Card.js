import React from 'react'

const PricingCard = ({header, subTitle, textArea, btnName}) => {
    return (
        <div className="border px-6 py-16 w-80  space-y-5 text-center shadow-lg">
            <div className="">
                <h1>{header}</h1>
                <h3>{subTitle}</h3>
            </div>
            <hr/>
            <p>{textArea}</p>
        </div>
    )
}

export default PricingCard

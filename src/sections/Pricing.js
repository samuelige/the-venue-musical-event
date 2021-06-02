import React from 'react'
import PricingCard from '../components/Pricing.Card'
import SectionHeader from '../components/SectionHeader'
import pricingData from '../data/pricing.data'

const Pricing = () => {
    return (
        <div className="w-full space-y-20 px-20">
            <div className="text-center">
                <SectionHeader>Pricing</SectionHeader>
            </div>

            <section className="w-full space-y-10 grid grid-cols-1 grid-rows-3 lg:grid-cols-3 md:space-y-0 lg:grid-rows-1">
                {
                    pricingData && pricingData.map(({header, subTitle, textArea, btnName}) => (
                        <PricingCard header={header} subTitle={subTitle} textArea={textArea} btnName={btnName}/>
                    ))
                }
            </section>
        </div>
    )
}

export default Pricing

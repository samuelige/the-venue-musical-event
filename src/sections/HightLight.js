import React, { useCallback, useEffect, useState } from 'react'
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import SectionHeader from '../components/SectionHeader'

const HightLight = () => {
    const hightTextData = {
        header : 'HightLights',
        body: {
            main: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto facilis quos harum unde commodi magni distinctio sapiente doloribus asperiores. Magni esse non optio fuga at, ex quod repellat? Odit excepturi cupiditate deleniti. Molestiae nemo debitis vitae ullam quia obcaecati. Nihil facilis deserunt commodi molestias perferendis doloremque 
            iste necessitatibus ipsum illum eos autem labore neque, 
            tempora hic unde totam exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sint numquam beatae velit sit quidem quibusdam voluptatem neque, commodi cupiditate. Tempora, labore delectus architecto eum ullam quidem. Tempora esse eveniet nam corporis nostrum nobis impedit. Dolorem quae consectetur neque, 
            maiores facere quis perferendis ex odio vitae qui, 
            ipsum iste tempora!`,
            subTitle: 'Purchase tickets before 20th June',
            subText: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto facilis quos harum unde commodi magni distinctio sapiente doloribus asperiores. Magni esse non optio fuga at, ex quod repellat? Odit excepturi cupiditate deleniti. Molestiae nemo debitis vitae ullam quia obcaecati. Nihil facilis deserunt commodi molestias perferendis doloremque 
            iste necessitatibus ipsum illum eos autem labore neque, 
            tempora hic unde totam exercitationem.`,
            btnName: 'Purchase Tickets'
        }

    }

    const {header, body} = hightTextData
    const {main, subTitle, subText, btnName}= body

    const [state, setState] = useState({
        discountStart: 0,
        discountEnd: 30
    })

    // let {discountStart, discountEnd} = state

    const handleDiscount = () => {
        if (state.discountStart < state.discountEnd) {
            setState({
                ...state,
                discountStart : state.discountStart + 1
            });
        }
    }
    setTimeout(() => {
        handleDiscount()
    }, 10);
     
    return (
        <div className="p-10 md:p-20 ">
            <div className="text-center p-4">
                <SectionHeader>{header}</SectionHeader>
            </div>
            <div className="space-y-5 md:space-y-10">
                <hr/>
                <p>{main}</p>
                <hr/>
            </div>
            <div className="grid grid-cols-1 grid-rows-2 md:grid-flow-col md:grid-rows-1 md:grid-cols-3 md:p-10 items-center">
                <Fade onReveal={()=>  handleDiscount()}>
                    <div className="text-center">
                        <p className="text-5xl font-bold uppercase">{state.discountStart}%</p>
                        <span className="text-2xl font-semibold uppercase text-red-500">
                            off
                        </span>
                    </div>
                </Fade>
                <Slide right>
                    <div className="md:row-start-1 md:col-start-2 md:col-span-2">
                        <h3>{subTitle}</h3>
                        <p>{subText}</p>
                    </div>
                </Slide>
            </div>
            
        </div>
    )
}

export default HightLight

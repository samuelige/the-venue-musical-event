import React from 'react'
import SectionHeader from '../components/SectionHeader'

const HightLight = () => {
    const hightTextData = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto facilis quos harum unde commodi magni distinctio sapiente doloribus asperiores. Magni esse non optio fuga at, ex quod repellat? Odit excepturi cupiditate deleniti. Molestiae nemo debitis vitae ullam quia obcaecati. Nihil facilis deserunt commodi molestias perferendis doloremque 
    iste necessitatibus ipsum illum eos autem labore neque, 
    tempora hic unde totam exercitationem. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet sint numquam beatae velit sit quidem quibusdam voluptatem neque, commodi cupiditate. Tempora, labore delectus architecto eum ullam quidem. Tempora esse eveniet nam corporis nostrum nobis impedit. Dolorem quae consectetur neque, 
    maiores facere quis perferendis ex odio vitae qui, 
    ipsum iste tempora!`

    return (
        <div className="">
            <div className="text-center">
                <SectionHeader>HightLights</SectionHeader>
            </div>
            <div className="">
                <hr/>
                <p>{hightTextData}</p>
                <hr/>
            </div>
            
        </div>
    )
}

export default HightLight

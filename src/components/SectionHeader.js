import React from 'react'

const SectionHeader = ({isWhite, children}) => {
    return (
        <div className="">
            <h1 className={isWhite ? 'text-white text-2xl font-semibold uppercase' : "text-black text-2xl font-semibold uppercase"}>{children}</h1>
        </div>
    )
}

export default SectionHeader
